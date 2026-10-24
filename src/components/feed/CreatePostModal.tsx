'use client';
import { CreatePostDialogView } from './CreatePostDialogView';
import type { CreatePostModalProps, LinkPreview } from './CreatePostModal.types';
import { usePostAttachments } from './usePostAttachments';
import { usePostFormatting } from './usePostFormatting';
import { usePostSubmission } from './usePostSubmission';
export type { CreatePostModalProps, LinkPreview } from './CreatePostModal.types';

import { getMentionQuery, replaceMention } from '@/lib/feed/mentionQuery';
import { searchUsersForMention } from '@/lib/api/posts';
import { useAuth } from '@/lib/auth/useAuth';
import { usePostingStatus } from '@/lib/feed/postingStatus';
import type { CelebrationType, MentionUser, PostType, PostVisibility } from '@/types/post';
import {
  BarChart3,
  FileText,
  Globe,
  Image as ImageIcon,
  Link as LinkIcon,
  Lock,
  Sparkles,
  Trophy,
  Users,
  Video,
} from 'lucide-react';
import React, { useCallback, useEffect, useRef, useState } from 'react';

const POST_TYPES = [
  { type: 'TEXT' as PostType, icon: FileText, label: 'Text' },
  { type: 'IMAGE' as PostType, icon: ImageIcon, label: 'Image' },
  { type: 'VIDEO' as PostType, icon: Video, label: 'Video' },
  { type: 'LINK' as PostType, icon: LinkIcon, label: 'Link' },
  { type: 'POLL' as PostType, icon: BarChart3, label: 'Poll' },
  { type: 'ARTICLE' as PostType, icon: Sparkles, label: 'Article' },
  { type: 'CELEBRATION' as PostType, icon: Trophy, label: 'Celebration' },
];

const VISIBILITY_OPTIONS: {
  value: PostVisibility;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}[] = [
  { value: 'PUBLIC', label: 'Anyone', icon: Globe },
  { value: 'CONNECTIONS', label: 'Connections only', icon: Users },
  { value: 'PRIVATE', label: 'Only me', icon: Lock },
];

const CELEBRATION_TYPES: { value: CelebrationType; label: string; emoji: string }[] = [
  { value: 'NEW_JOB', label: 'Started a new job', emoji: '🎉' },
  { value: 'PROMOTION', label: 'Got promoted', emoji: '🚀' },
  { value: 'GRADUATION', label: 'Graduated', emoji: '🎓' },
  { value: 'CERTIFICATION', label: 'Earned a certification', emoji: '📜' },
  { value: 'WORK_ANNIVERSARY', label: 'Work anniversary', emoji: '🎊' },
  { value: 'BIRTHDAY', label: 'Birthday', emoji: '🎂' },
];

function CreatePostModalSession({ isOpen, onClose, onPostCreated }: CreatePostModalProps) {
  const { user } = useAuth();
  const { submitPost } = usePostingStatus();
  const [postType, setPostType] = useState<PostType>('TEXT');
  const [content, setContent] = useState('');
  const [visibility, setVisibility] = useState<PostVisibility>('PUBLIC');
  const [showVisibilityDropdown, setShowVisibilityDropdown] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Image state
  const [images, setImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [editingImageIndex, setEditingImageIndex] = useState<number | null>(null);

  // Video state
  const [video, setVideo] = useState<File | null>(null);
  const [videoPreview, setVideoPreview] = useState<string | null>(null);

  // Link state
  const [linkUrl, setLinkUrl] = useState('');
  const [linkPreview] = useState<LinkPreview | null>(null);

  // Poll state
  const [pollOptions, setPollOptions] = useState<string[]>(['', '']);
  const [pollDuration, setPollDuration] = useState(24); // hours
  const [showResultsBeforeVote, setShowResultsBeforeVote] = useState(false);

  // Article state
  const [articleTitle, setArticleTitle] = useState('');
  const [articleCoverImage] = useState<File | null>(null);
  const [articleTags, setArticleTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState('');

  // Celebration state
  const [celebrationType, setCelebrationType] = useState<CelebrationType | null>(null);

  // Mention state
  const mentionRequest = useRef(0);
  const mentionCursor = useRef(0);
  const [mentionStatus, setMentionStatus] = useState('');
  const [mentionResults, setMentionResults] = useState<MentionUser[]>([]);
  const [showMentionDropdown, setShowMentionDropdown] = useState(false);
  const [mentions, setMentions] = useState<string[]>([]);

  // Color picker state
  const [showColorPicker, setShowColorPicker] = useState(false);
  const colorPickerRef = useRef<HTMLDivElement>(null);

  // Refs
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  // Close color picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (colorPickerRef.current && !colorPickerRef.current.contains(event.target as Node)) {
        setShowColorPicker(false);
      }
    };

    if (showColorPicker) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showColorPicker]);
  // Handle image selection
  const { handleEditedImageSave, handleImageSelect, handleVideoSelect, removeImage } =
    usePostAttachments({
      editingImageIndex,
      images,
      setEditingImageIndex,
      setError,
      setImagePreviews,
      setImages,
      setVideo,
      setVideoPreview,
    });

  // Handle poll option change
  const handlePollOptionChange = (index: number, value: string) => {
    const newOptions = [...pollOptions];
    newOptions[index] = value;
    setPollOptions(newOptions);
  };

  // Add poll option
  const addPollOption = () => {
    if (pollOptions.length < 6) {
      setPollOptions([...pollOptions, '']);
    }
  };

  // Remove poll option
  const removePollOption = (index: number) => {
    if (pollOptions.length > 2) {
      setPollOptions(pollOptions.filter((_, i) => i !== index));
    }
  };

  // Handle article tag add
  const handleAddTag = () => {
    if (tagInput.trim() && articleTags.length < 5) {
      setArticleTags([...articleTags, tagInput.trim()]);
      setTagInput('');
    }
  };

  // Ignore responses for a query that the user has already changed or dismissed.
  const searchMentions = useCallback(async (query: string) => {
    const request = ++mentionRequest.current;
    setMentionResults([]);
    setShowMentionDropdown(true);
    if (query.length < 2) {
      setMentionStatus('Type at least 2 characters to find someone.');
      return;
    }
    setMentionStatus('Searching people...');
    try {
      const results = await searchUsersForMention(query);
      if (request !== mentionRequest.current) return;
      setMentionResults(results);
      setMentionStatus(results.length ? '' : 'No people found. Try another name.');
    } catch {
      if (request !== mentionRequest.current) return;
      setMentionStatus('Could not load people. Keep typing to try again.');
    }
  }, []);

  const updateMention = (value: string, cursor: number) => {
    mentionCursor.current = cursor;
    const match = getMentionQuery(value, cursor);
    if (match) {
      void searchMentions(match.query);
    } else {
      ++mentionRequest.current;
      setShowMentionDropdown(false);
    }
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    updateMention(e.target.value, e.target.selectionStart);
  };

  const insertMention = (user: MentionUser) => {
    const result = replaceMention(content, mentionCursor.current, user.username);
    if (!result) return;
    ++mentionRequest.current;
    setContent(result.content);
    setMentions((current) => Array.from(new Set([...current, user.id])));
    setShowMentionDropdown(false);
    requestAnimationFrame(() => {
      contentRef.current?.focus();
      contentRef.current?.setSelectionRange(result.cursor, result.cursor);
    });
  };

  // Text formatting helper - wraps selected text or inserts at cursor
  const {
    COLOR_PRESETS,
    handleBold,
    handleCenter,
    handleCode,
    handleColorInsert,
    handleItalic,
    handleList,
  } = usePostFormatting({ content, contentRef, setContent, setShowColorPicker });

  const handleMentionClick = () => {
    const textarea = contentRef.current;
    if (!textarea) return;
    const start = textarea.selectionStart;
    const prefix = start > 0 && !/\s/.test(content[start - 1]) ? ' @' : '@';
    const value = content.slice(0, start) + prefix + content.slice(textarea.selectionEnd);
    const cursor = start + prefix.length;
    setContent(value);
    updateMention(value, cursor);
    requestAnimationFrame(() => {
      textarea.focus();
      textarea.setSelectionRange(cursor, cursor);
    });
  };

  // Submit post
  const { handleSubmit } = usePostSubmission({
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
  });

  if (!isOpen) return null;

  return (
    <CreatePostDialogView
      CELEBRATION_TYPES={CELEBRATION_TYPES}
      COLOR_PRESETS={COLOR_PRESETS}
      POST_TYPES={POST_TYPES}
      VISIBILITY_OPTIONS={VISIBILITY_OPTIONS}
      addPollOption={addPollOption}
      articleTags={articleTags}
      articleTitle={articleTitle}
      celebrationType={celebrationType}
      colorPickerRef={colorPickerRef}
      content={content}
      contentRef={contentRef}
      editingImageIndex={editingImageIndex}
      error={error}
      fileInputRef={fileInputRef}
      handleAddTag={handleAddTag}
      handleBold={handleBold}
      handleCenter={handleCenter}
      handleCode={handleCode}
      handleColorInsert={handleColorInsert}
      handleContentChange={handleContentChange}
      handleEditedImageSave={handleEditedImageSave}
      handleImageSelect={handleImageSelect}
      handleItalic={handleItalic}
      handleList={handleList}
      handleMentionClick={handleMentionClick}
      handlePollOptionChange={handlePollOptionChange}
      handleSubmit={handleSubmit}
      handleVideoSelect={handleVideoSelect}
      imagePreviews={imagePreviews}
      images={images}
      insertMention={insertMention}
      isSubmitting={isSubmitting}
      linkPreview={linkPreview}
      linkUrl={linkUrl}
      mentionStatus={mentionStatus}
      mentionResults={mentionResults}
      onClose={onClose}
      pollDuration={pollDuration}
      pollOptions={pollOptions}
      postType={postType}
      removeImage={removeImage}
      removePollOption={removePollOption}
      setArticleTags={setArticleTags}
      setArticleTitle={setArticleTitle}
      setCelebrationType={setCelebrationType}
      setEditingImageIndex={setEditingImageIndex}
      setLinkUrl={setLinkUrl}
      setPollDuration={setPollDuration}
      setPostType={setPostType}
      setShowColorPicker={setShowColorPicker}
      setShowResultsBeforeVote={setShowResultsBeforeVote}
      setShowVisibilityDropdown={setShowVisibilityDropdown}
      setTagInput={setTagInput}
      setVideo={setVideo}
      setVideoPreview={setVideoPreview}
      setVisibility={setVisibility}
      showColorPicker={showColorPicker}
      showMentionDropdown={showMentionDropdown}
      showResultsBeforeVote={showResultsBeforeVote}
      showVisibilityDropdown={showVisibilityDropdown}
      tagInput={tagInput}
      user={user}
      videoInputRef={videoInputRef}
      videoPreview={videoPreview}
      visibility={visibility}
    />
  );
}

export default CreatePostModal;

export function CreatePostModal(props: CreatePostModalProps) {
  return props.isOpen ? <CreatePostModalSession {...props} /> : null;
}
