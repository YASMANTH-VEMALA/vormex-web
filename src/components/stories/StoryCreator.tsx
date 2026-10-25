'use client';
import type { StoryMusic } from '@/lib/stories/music';
import type { CreatorStep, StoryCreatorProps, StoryType } from './StoryCreator.types';
import { StoryCreatorView } from './StoryCreatorView';
export type { CreatorStep, StoryCreatorProps, StoryType } from './StoryCreator.types';

import { asApiError } from '@/lib/api/errors';
import {
  createStory,
  createStoryWithMedia,
  type StoryCategory,
  type StoryVisibility,
} from '@/lib/api/stories';
import {
  Globe,
  Lock,
  Users,
  BriefcaseBusiness,
  BookOpen,
  Trophy,
  FolderKanban,
  Clapperboard,
  Lightbulb,
  CalendarDays,
  MessageCircle,
  Layers,
} from 'lucide-react';
import React, { useCallback, useRef, useState } from 'react';

const STORY_CATEGORIES: { value: StoryCategory; label: string; icon: React.ReactNode }[] = [
  { value: 'DAY_AT_WORK', label: 'Day at Work', icon: <BriefcaseBusiness /> },
  { value: 'LEARNING', label: 'Learning', icon: <BookOpen /> },
  { value: 'ACHIEVEMENT', label: 'Achievement', icon: <Trophy /> },
  { value: 'PROJECT', label: 'Project', icon: <FolderKanban /> },
  { value: 'BEHIND_SCENES', label: 'Behind scenes', icon: <Clapperboard /> },
  { value: 'TIPS', label: 'Tips', icon: <Lightbulb /> },
  { value: 'EVENT', label: 'Event', icon: <CalendarDays /> },
  { value: 'QNA', label: 'Q&A', icon: <MessageCircle /> },
  { value: 'GENERAL', label: 'General', icon: <Layers /> },
];

const VISIBILITY_OPTIONS: {
  value: StoryVisibility;
  label: string;
  icon: React.ReactNode;
  desc: string;
}[] = [
  {
    value: 'PUBLIC',
    label: 'Public',
    icon: <Globe className="w-5 h-5" />,
    desc: 'Anyone can view',
  },
  {
    value: 'CONNECTIONS',
    label: 'Connections',
    icon: <Users className="w-5 h-5" />,
    desc: 'Only connections',
  },
  {
    value: 'CLOSE_FRIENDS',
    label: 'Close Friends',
    icon: <Lock className="w-5 h-5" />,
    desc: 'Selected people only',
  },
];

const TEXT_BACKGROUNDS = [
  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
  'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
  'linear-gradient(135deg, #ff0844 0%, #ffb199 100%)',
];

export function StoryCreator({ isOpen, onClose, onStoryCreated }: StoryCreatorProps) {
  const [music, setMusic] = useState<StoryMusic | null>(null);
  const [step, setStep] = useState<CreatorStep>('select-type');
  const [storyType, setStoryType] = useState<StoryType | null>(null);
  const [mediaFile, setMediaFile] = useState<File | null>(null);
  const [mediaPreview, setMediaPreview] = useState<string | null>(null);
  const [textContent, setTextContent] = useState('');
  const [textBackground, setTextBackground] = useState(TEXT_BACKGROUNDS[0]);
  const [linkUrl, setLinkUrl] = useState('');
  const [linkTitle, setLinkTitle] = useState('');
  const [category, setCategory] = useState<StoryCategory>('GENERAL');
  const [visibility, setVisibility] = useState<StoryVisibility>('PUBLIC');
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      // Validate file type
      const isImage = file.type.startsWith('image/');
      const isVideo = file.type.startsWith('video/');

      if (storyType === 'image' && !isImage) {
        setError('Please select an image file');
        return;
      }
      if (storyType === 'video' && !isVideo) {
        setError('Please select a video file');
        return;
      }

      // Validate file size (50MB max for video, 10MB for image)
      const maxSize = isVideo ? 50 * 1024 * 1024 : 10 * 1024 * 1024;
      if (file.size > maxSize) {
        setError(`File too large. Max size: ${isVideo ? '50MB' : '10MB'}`);
        return;
      }

      setMediaFile(file);
      setMediaPreview(URL.createObjectURL(file));
      setError(null);
      setStep('edit');
    },
    [storyType]
  );

  const handleTypeSelect = (type: StoryType) => {
    setStoryType(type);
    if (type === 'text') {
      setStep('edit');
    } else {
      setStep('upload-media');
    }
  };

  const handleRemoveMedia = () => {
    if (mediaPreview) {
      URL.revokeObjectURL(mediaPreview);
    }
    setMediaFile(null);
    setMediaPreview(null);
    setStep('upload-media');
  };

  const handleSubmit = async () => {
    setIsUploading(true);
    setError(null);

    try {
      if (storyType === 'text') {
        // Text-only story - use JSON API
        await createStory({
          music,
          mediaType: 'TEXT',
          textContent,
          backgroundColor: textBackground,
          category,
          visibility,
          linkUrl: linkUrl || undefined,
          linkTitle: linkTitle || undefined,
        });
      } else {
        // Media story - use FormData for file upload
        const formData = new FormData();
        formData.append('mediaType', storyType === 'video' ? 'VIDEO' : 'IMAGE');

        if (mediaFile) {
          formData.append('media', mediaFile);
        }
        if (textContent) {
          formData.append('textContent', textContent);
        }

        if (music) formData.append('music', JSON.stringify(music));
        formData.append('category', category);
        formData.append('visibility', visibility);

        if (linkUrl) {
          formData.append('linkUrl', linkUrl);
          if (linkTitle) {
            formData.append('linkTitle', linkTitle);
          }
        }

        await createStoryWithMedia(formData);
      }

      onStoryCreated?.();
      handleClose();
    } catch (err: unknown) {
      setError(asApiError(err).message || 'Failed to create story');
    } finally {
      setIsUploading(false);
    }
  };

  const handleClose = () => {
    // Cleanup
    if (mediaPreview) {
      URL.revokeObjectURL(mediaPreview);
    }
    setMusic(null);
    setStep('select-type');
    setStoryType(null);
    setMediaFile(null);
    setMediaPreview(null);
    setTextContent('');
    setTextBackground(TEXT_BACKGROUNDS[0]);
    setLinkUrl('');
    setLinkTitle('');
    setCategory('GENERAL');
    setVisibility('PUBLIC');
    setError(null);
    onClose();
  };

  const goBack = () => {
    switch (step) {
      case 'upload-media':
        setStep('select-type');
        setStoryType(null);
        break;
      case 'edit':
        if (storyType === 'text') {
          setStep('select-type');
          setStoryType(null);
        } else {
          handleRemoveMedia();
        }
        break;
      case 'details':
        setStep('edit');
        break;
    }
  };

  const canProceed = () => {
    if (step === 'edit') {
      if (storyType === 'text') {
        return textContent.trim().length > 0;
      }
      return !!mediaFile;
    }
    return true;
  };

  if (!isOpen) return null;

  return (
    <StoryCreatorView
      music={music}
      setMusic={setMusic}
      STORY_CATEGORIES={STORY_CATEGORIES}
      TEXT_BACKGROUNDS={TEXT_BACKGROUNDS}
      VISIBILITY_OPTIONS={VISIBILITY_OPTIONS}
      canProceed={canProceed}
      category={category}
      error={error}
      fileInputRef={fileInputRef}
      goBack={goBack}
      handleClose={handleClose}
      handleFileSelect={handleFileSelect}
      handleRemoveMedia={handleRemoveMedia}
      handleSubmit={handleSubmit}
      handleTypeSelect={handleTypeSelect}
      isUploading={isUploading}
      linkTitle={linkTitle}
      linkUrl={linkUrl}
      mediaPreview={mediaPreview}
      setCategory={setCategory}
      setLinkTitle={setLinkTitle}
      setLinkUrl={setLinkUrl}
      setStep={setStep}
      setTextBackground={setTextBackground}
      setTextContent={setTextContent}
      setVisibility={setVisibility}
      step={step}
      storyType={storyType}
      textBackground={textBackground}
      textContent={textContent}
      visibility={visibility}
    />
  );
}
