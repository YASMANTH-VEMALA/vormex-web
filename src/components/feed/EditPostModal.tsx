'use client';
import { createEditPostModalInitialState } from './createEditPostModalInitialState';
import { EditPostDialogView } from './EditPostDialogView';
import type { EditPostModalProps } from './EditPostModal.types';
export type { EditPostModalProps } from './EditPostModal.types';

import { asApiError } from '@/lib/api/errors';
import { searchUsersForMention, updatePost } from '@/lib/api/posts';
import { useAuth } from '@/lib/auth/useAuth';
import type { MentionUser, PostVisibility } from '@/types/post';
import { Globe, Lock, Users } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

const VISIBILITY_OPTIONS: {
  value: PostVisibility;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}[] = [
  { value: 'PUBLIC', label: 'Anyone', icon: Globe },
  { value: 'CONNECTIONS', label: 'Connections only', icon: Users },
  { value: 'PRIVATE', label: 'Only me', icon: Lock },
];

const COLOR_PRESETS = [
  { name: 'Red', value: '#ef4444' },
  { name: 'Orange', value: '#f97316' },
  { name: 'Yellow', value: '#eab308' },
  { name: 'Green', value: '#22c55e' },
  { name: 'Teal', value: '#14b8a6' },
  { name: 'Blue', value: '#3b82f6' },
  { name: 'Purple', value: '#a855f7' },
  { name: 'Pink', value: '#ec4899' },
];

function EditPostModalSession({ isOpen, onClose, post, onPostUpdated }: EditPostModalProps) {
  const { user } = useAuth();
  const [initialValues] = useState(() => createEditPostModalInitialState({ post }));
  const [content, setContent] = useState(initialValues.content);
  const [visibility, setVisibility] = useState<PostVisibility>(initialValues.visibility);
  const [showVisibilityDropdown, setShowVisibilityDropdown] = useState(
    initialValues.showVisibilityDropdown
  );
  const [isSubmitting, setIsSubmitting] = useState(initialValues.isSubmitting);
  const [error, setError] = useState<string | null>(initialValues.error);

  // Mention state
  const [mentionQuery, setMentionQuery] = useState(initialValues.mentionQuery);
  const [mentionResults, setMentionResults] = useState<MentionUser[]>(initialValues.mentionResults);
  const [showMentionDropdown, setShowMentionDropdown] = useState(initialValues.showMentionDropdown);

  // Color picker state
  const [showColorPicker, setShowColorPicker] = useState(initialValues.showColorPicker);
  const colorPickerRef = useRef<HTMLDivElement>(null);

  // Refs
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

  // Mention search
  useEffect(() => {
    const searchMentions = async () => {
      if (mentionQuery.length >= 2) {
        try {
          const results = await searchUsersForMention(mentionQuery);
          setMentionResults(results);
          setShowMentionDropdown(true);
        } catch (error) {
          console.error('Error searching mentions:', error);
        }
      } else {
        setMentionResults([]);
        setShowMentionDropdown(false);
      }
    };

    const debounce = setTimeout(searchMentions, 300);
    return () => clearTimeout(debounce);
  }, [mentionQuery]);

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setContent(value);

    // Check for @ mentions
    const cursorPos = e.target.selectionStart;
    const textBeforeCursor = value.slice(0, cursorPos);
    const lastAtIndex = textBeforeCursor.lastIndexOf('@');

    if (lastAtIndex !== -1) {
      const textAfterAt = textBeforeCursor.slice(lastAtIndex + 1);
      if (!textAfterAt.includes(' ') && textAfterAt.length >= 1) {
        setMentionQuery(textAfterAt);
      } else {
        setMentionQuery('');
        setShowMentionDropdown(false);
      }
    } else {
      setMentionQuery('');
      setShowMentionDropdown(false);
    }
  };

  const insertMention = (user: MentionUser) => {
    const textarea = contentRef.current;
    if (!textarea) return;

    const cursorPos = textarea.selectionStart;
    const textBeforeCursor = content.slice(0, cursorPos);
    const lastAtIndex = textBeforeCursor.lastIndexOf('@');
    const textAfterCursor = content.slice(cursorPos);

    const newContent = content.slice(0, lastAtIndex) + `@${user.username} ` + textAfterCursor;

    setContent(newContent);
    setMentionQuery('');
    setShowMentionDropdown(false);

    setTimeout(() => {
      const newCursorPos = lastAtIndex + user.username.length + 2;
      textarea.focus();
      textarea.setSelectionRange(newCursorPos, newCursorPos);
    }, 0);
  };

  // Text formatting helpers
  const formatText = (prefix: string, suffix: string = prefix) => {
    const textarea = contentRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = content.slice(start, end);

    let newContent: string;
    let newCursorPos: number;

    if (selectedText) {
      newContent = content.slice(0, start) + prefix + selectedText + suffix + content.slice(end);
      newCursorPos = end + prefix.length + suffix.length;
    } else {
      newContent = content.slice(0, start) + prefix + suffix + content.slice(end);
      newCursorPos = start + prefix.length;
    }

    setContent(newContent);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(newCursorPos, newCursorPos);
    }, 0);
  };

  const handleBold = () => formatText('**');
  const handleItalic = () => formatText('*');
  const handleCode = () => formatText('`');
  const handleCenter = () => formatText('[center]', '[/center]');

  const handleList = () => {
    const textarea = contentRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const beforeCursor = content.slice(0, start);
    const afterCursor = content.slice(start);
    const lineStart = beforeCursor.lastIndexOf('\n') + 1;
    const lineContent = beforeCursor.slice(lineStart);

    let newContent: string;
    let newCursorPos: number;

    if (lineContent.startsWith('- ')) {
      newContent = content.slice(0, lineStart) + lineContent.slice(2) + afterCursor;
      newCursorPos = start - 2;
    } else {
      newContent = content.slice(0, lineStart) + '- ' + lineContent + afterCursor;
      newCursorPos = start + 2;
    }

    setContent(newContent);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(newCursorPos, newCursorPos);
    }, 0);
  };

  const handleMentionClick = () => {
    const textarea = contentRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const newContent = content.slice(0, start) + '@' + content.slice(start);
    setContent(newContent);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + 1, start + 1);
    }, 0);
  };

  const handleColorInsert = (colorValue: string) => {
    const textarea = contentRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = content.slice(start, end);
    const openTag = `[color:${colorValue}]`;
    const closeTag = '[/color]';

    let newContent: string;
    let newCursorPos: number;

    if (selectedText) {
      newContent = content.slice(0, start) + openTag + selectedText + closeTag + content.slice(end);
      newCursorPos = start + openTag.length + selectedText.length + closeTag.length;
    } else {
      newContent = content.slice(0, start) + openTag + closeTag + content.slice(start);
      newCursorPos = start + openTag.length;
    }

    setContent(newContent);
    setShowColorPicker(false);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(newCursorPos, newCursorPos);
    }, 0);
  };

  // Submit update
  const handleSubmit = async () => {
    if (isSubmitting) return;

    setError(null);
    setIsSubmitting(true);

    try {
      const updatedPost = await updatePost(post.id, {
        content,
        visibility,
      });

      onPostUpdated?.(updatedPost);
      onClose();
    } catch (err: unknown) {
      console.error('Update post error:', err);
      setError(asApiError(err).message || 'Failed to update post');
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedVisibility =
    VISIBILITY_OPTIONS.find((v) => v.value === visibility) || VISIBILITY_OPTIONS[0];
  const VisibilityIcon = selectedVisibility.icon;

  if (!isOpen) return null;

  return (
    <EditPostDialogView
      COLOR_PRESETS={COLOR_PRESETS}
      VISIBILITY_OPTIONS={VISIBILITY_OPTIONS}
      VisibilityIcon={VisibilityIcon}
      colorPickerRef={colorPickerRef}
      content={content}
      contentRef={contentRef}
      error={error}
      handleBold={handleBold}
      handleCenter={handleCenter}
      handleCode={handleCode}
      handleColorInsert={handleColorInsert}
      handleContentChange={handleContentChange}
      handleItalic={handleItalic}
      handleList={handleList}
      handleMentionClick={handleMentionClick}
      handleSubmit={handleSubmit}
      insertMention={insertMention}
      isOpen={isOpen}
      isSubmitting={isSubmitting}
      mentionResults={mentionResults}
      onClose={onClose}
      post={post}
      selectedVisibility={selectedVisibility}
      setShowColorPicker={setShowColorPicker}
      setShowVisibilityDropdown={setShowVisibilityDropdown}
      setVisibility={setVisibility}
      showColorPicker={showColorPicker}
      showMentionDropdown={showMentionDropdown}
      showVisibilityDropdown={showVisibilityDropdown}
      user={user}
    />
  );
}

/** A fresh form session owns its draft; background prop updates cannot overwrite it. */
export function EditPostModal(props: EditPostModalProps) {
  return props.isOpen ? <EditPostModalSession key={props.post?.id ?? 'new'} {...props} /> : null;
}
