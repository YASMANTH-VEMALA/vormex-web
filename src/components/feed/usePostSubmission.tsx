'use client';
import { asApiError } from '@/lib/api/errors';
import React from 'react';

interface usePostSubmissionOptions {
  articleCoverImage: File | null;
  articleTags: string[];
  articleTitle: string;
  celebrationType: import('@/types/post').CelebrationType | null;
  content: string;
  images: File[];
  isSubmitting: boolean;
  linkUrl: string;
  mentions: string[];
  onClose: () => void;
  onPostCreated: ((post?: import('@/types/post').Post | undefined) => void) | undefined;
  pollDuration: number;
  pollOptions: string[];
  postType: import('@/types/post').PostType;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>;
  submitPost: (input: import('@/lib/feed/postingStatus').SubmitPostInput) => Promise<boolean>;
  video: File | null;
  visibility: import('@/types/post').PostVisibility;
}
export function usePostSubmission({
  articleCoverImage,
  articleTags,
  articleTitle,
  celebrationType,
  content,
  images,
  isSubmitting,
  linkUrl,
  mentions,
  onClose,
  onPostCreated,
  pollDuration,
  pollOptions,
  postType,
  setError,
  setIsSubmitting,
  submitPost,
  video,
  visibility,
}: usePostSubmissionOptions) {
  const handleSubmit = async () => {
    if (isSubmitting) return;

    setError(null);
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('type', postType);
      formData.append('visibility', visibility);

      if (content) {
        formData.append('content', content);
      }

      if (mentions.length > 0) {
        formData.append('mentions', JSON.stringify(mentions));
      }

      switch (postType) {
        case 'IMAGE':
          if (images.length === 0) {
            setError('Please add at least one image');
            setIsSubmitting(false);
            return;
          }
          images.forEach((img) => {
            formData.append('media', img);
          });
          break;

        case 'VIDEO':
          if (!video) {
            setError('Please add a video');
            setIsSubmitting(false);
            return;
          }
          formData.append('video', video);
          break;

        case 'LINK':
          if (!linkUrl) {
            setError('Please add a link');
            setIsSubmitting(false);
            return;
          }
          formData.append('linkUrl', linkUrl);
          break;

        case 'POLL':
          const validOptions = pollOptions.filter((opt) => opt.trim());
          if (validOptions.length < 2) {
            setError('Please add at least 2 poll options');
            setIsSubmitting(false);
            return;
          }
          validOptions.forEach((option) => {
            formData.append('pollOptions', option);
          });
          formData.append('pollDuration', String(pollDuration));
          break;

        case 'ARTICLE':
          if (!articleTitle) {
            setError('Please add an article title');
            setIsSubmitting(false);
            return;
          }
          formData.append('articleTitle', articleTitle);
          if (articleCoverImage) {
            formData.append('articleCoverImage', articleCoverImage);
          }
          if (articleTags.length > 0) {
            articleTags.forEach((tag) => {
              formData.append('articleTags', tag);
            });
          }
          break;

        case 'CELEBRATION':
          if (!celebrationType) {
            setError('Please select a celebration type');
            setIsSubmitting(false);
            return;
          }
          formData.append('celebrationType', celebrationType);
          break;

        case 'TEXT':
        default:
          if (!content.trim()) {
            setError('Please add some content');
            setIsSubmitting(false);
            return;
          }
          break;
      }

      /*
       * Everything below this point is bounded by the user's upload speed, not
       * by validation, so the upload is handed to the header indicator and the
       * composer closes right away. Failures surface there with a retry — this
       * modal is gone by the time they happen, and it still holds the draft's
       * File handles, so the retry re-sends rather than losing the post.
       */
      void submitPost({
        formData,
        thumbnailFile: images[0] || video || articleCoverImage || null,
        onCreated: (createdPost) => onPostCreated?.(createdPost),
      });
      onClose();
    } catch (err: unknown) {
      console.error('Error creating post:', err);
      setError(asApiError(err).response?.data?.error || 'Failed to create post');
    } finally {
      setIsSubmitting(false);
    }
  };
  return { handleSubmit };
}
