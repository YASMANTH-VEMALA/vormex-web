'use client';
import React from 'react';

interface usePostAttachmentsOptions {
  editingImageIndex: number | null;
  images: File[];
  setEditingImageIndex: React.Dispatch<React.SetStateAction<number | null>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  setImagePreviews: React.Dispatch<React.SetStateAction<string[]>>;
  setImages: React.Dispatch<React.SetStateAction<File[]>>;
  setVideo: React.Dispatch<React.SetStateAction<File | null>>;
  setVideoPreview: React.Dispatch<React.SetStateAction<string | null>>;
}
export function usePostAttachments({
  editingImageIndex,
  images,
  setEditingImageIndex,
  setError,
  setImagePreviews,
  setImages,
  setVideo,
  setVideoPreview,
}: usePostAttachmentsOptions) {
  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (images.length + files.length > 10) {
      setError('Maximum 10 images allowed');
      return;
    }

    const validFiles = files.filter((file) => {
      if (file.size > 10 * 1024 * 1024) {
        setError('Image size must be under 10MB');
        return false;
      }
      return true;
    });

    setImages((prev) => [...prev, ...validFiles]);

    validFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreviews((prev) => [...prev, e.target?.result as string]);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleVideoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 500 * 1024 * 1024) {
      setError('Video size must be under 500MB');
      return;
    }

    setVideo(file);
    setVideoPreview(URL.createObjectURL(file));
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const handleEditedImageSave = (blob: Blob) => {
    if (editingImageIndex === null) return;

    // Create a new File from the blob
    const editedFile = new File([blob], images[editingImageIndex].name, { type: 'image/jpeg' });

    // Update the images array
    setImages((prev) => {
      const newImages = [...prev];
      newImages[editingImageIndex] = editedFile;
      return newImages;
    });

    // Update the preview
    const newPreviewUrl = URL.createObjectURL(blob);
    setImagePreviews((prev) => {
      const newPreviews = [...prev];
      newPreviews[editingImageIndex] = newPreviewUrl;
      return newPreviews;
    });

    setEditingImageIndex(null);
  };
  return { handleEditedImageSave, handleImageSelect, handleVideoSelect, removeImage };
}
