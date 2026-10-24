'use client';
import React, { useEffect } from 'react';
import type { FilePreview } from './ChatInput.types';

interface useChatAttachmentsOptions {
  MAX_FILE_SIZE: number;
  MAX_VIDEO_DURATION: 60;
  audioChunksRef: React.RefObject<Blob[]>;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  getFileType: (file: File) => 'image' | 'video' | 'document' | 'audio' | null;
  isRecording: boolean;
  mediaRecorderRef: React.RefObject<MediaRecorder | null>;
  onUploadingMessagesChange:
    | ((messages: import('@/components/chat/ChatInput.types').UploadingMessage[]) => void)
    | undefined;
  recordingIntervalRef: React.RefObject<NodeJS.Timeout | null>;
  setAudioBlob: React.Dispatch<React.SetStateAction<Blob | null>>;
  setIsRecording: React.Dispatch<React.SetStateAction<boolean>>;
  setRecordingDuration: React.Dispatch<React.SetStateAction<number>>;
  setSelectedFiles: React.Dispatch<
    React.SetStateAction<import('@/components/chat/ChatInput.types').FilePreview[]>
  >;
  setShowAttachMenu: React.Dispatch<React.SetStateAction<boolean>>;
  uploadingMessages: import('@/components/chat/ChatInput.types').UploadingMessage[];
}
export function useChatAttachments({
  MAX_FILE_SIZE,
  MAX_VIDEO_DURATION,
  audioChunksRef,
  fileInputRef,
  getFileType,
  isRecording,
  mediaRecorderRef,
  onUploadingMessagesChange,
  recordingIntervalRef,
  setAudioBlob,
  setIsRecording,
  setRecordingDuration,
  setSelectedFiles,
  setShowAttachMenu,
  uploadingMessages,
}: useChatAttachmentsOptions) {
  const checkVideoDuration = (file: File): Promise<boolean> => {
    return new Promise((resolve) => {
      const video = document.createElement('video');
      video.preload = 'metadata';
      video.onloadedmetadata = () => {
        URL.revokeObjectURL(video.src);
        if (video.duration > MAX_VIDEO_DURATION) {
          alert(
            `Video "${file.name}" is too long. Maximum duration is ${MAX_VIDEO_DURATION} seconds.`
          );
          resolve(false);
        } else {
          resolve(true);
        }
      };
      video.onerror = () => {
        URL.revokeObjectURL(video.src);
        resolve(true); // Allow if we can't check duration
      };
      video.src = URL.createObjectURL(file);
    });
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);

    const validFiles: FilePreview[] = [];

    for (const file of files) {
      // Check file size
      if (file.size > MAX_FILE_SIZE) {
        alert(`File "${file.name}" is too large. Maximum size is 50MB.`);
        continue;
      }

      const fileType = getFileType(file);

      if (!fileType) {
        alert(`File type not supported: ${file.name}`);
        continue;
      }

      // Check video duration
      if (fileType === 'video') {
        const isValidDuration = await checkVideoDuration(file);
        if (!isValidDuration) {
          continue;
        }
      }

      // Create preview URL
      let preview = '';
      if (fileType === 'image' || fileType === 'video') {
        preview = URL.createObjectURL(file);
      }

      validFiles.push({
        file,
        preview,
        type: fileType,
      });
    }

    setSelectedFiles((prev) => [...prev, ...validFiles]);
    setShowAttachMenu(false);

    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const removeFile = (index: number) => {
    setSelectedFiles((prev) => {
      const newFiles = [...prev];
      // Revoke object URL to free memory
      if (newFiles[index].preview) {
        URL.revokeObjectURL(newFiles[index].preview);
      }
      newFiles.splice(index, 1);
      return newFiles;
    });
  };

  const openFilePicker = (accept: string) => {
    if (fileInputRef.current) {
      fileInputRef.current.accept = accept;
      fileInputRef.current.click();
    }
    setShowAttachMenu(false);
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/webm' });
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          audioChunksRef.current.push(e.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        setAudioBlob(audioBlob);
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
      setRecordingDuration(0);

      // Update duration every second
      recordingIntervalRef.current = setInterval(() => {
        setRecordingDuration((prev) => prev + 1);
      }, 1000);
    } catch (error) {
      console.error('Failed to start recording:', error);
      alert('Could not access microphone. Please grant permission.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      if (recordingIntervalRef.current) {
        clearInterval(recordingIntervalRef.current);
        recordingIntervalRef.current = null;
      }
    }
  };

  const cancelRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stream.getTracks().forEach((track) => track.stop());
    }
    setIsRecording(false);
    setAudioBlob(null);
    setRecordingDuration(0);
    if (recordingIntervalRef.current) {
      clearInterval(recordingIntervalRef.current);
      recordingIntervalRef.current = null;
    }
  };

  const formatDuration = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    onUploadingMessagesChange?.(uploadingMessages);
  }, [uploadingMessages, onUploadingMessagesChange]);
  return {
    cancelRecording,
    formatDuration,
    handleFileSelect,
    openFilePicker,
    removeFile,
    startRecording,
    stopRecording,
  };
}
