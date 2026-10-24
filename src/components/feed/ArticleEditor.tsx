'use client';
import { AlignCenter, AtSign, Bold, Code, Italic, List, Palette } from 'lucide-react';
import React, { useState } from 'react';
import { UserAvatar } from '@/components/ui/UserAvatar';
import { FormattedContent } from './FormattedContent';

interface ArticleEditorProps {
  COLOR_PRESETS: { name: string; value: string }[];
  colorPickerRef: React.RefObject<HTMLDivElement | null>;
  content: string;
  contentRef: React.RefObject<HTMLTextAreaElement | null>;
  handleBold: () => void;
  handleCenter: () => void;
  handleCode: () => void;
  handleColorInsert: (colorValue: string) => void;
  handleContentChange: (e: React.ChangeEvent<HTMLTextAreaElement, Element>) => void;
  handleItalic: () => void;
  handleList: () => void;
  handleMentionClick: () => void;
  insertMention: (user: import('@/types/post').MentionUser) => void;
  mentionStatus: string;
  mentionResults: import('@/types/post').MentionUser[];
  setShowColorPicker: React.Dispatch<React.SetStateAction<boolean>>;
  showColorPicker: boolean;
  showMentionDropdown: boolean;
}

export function ArticleEditor({
  COLOR_PRESETS,
  colorPickerRef,
  content,
  contentRef,
  handleBold,
  handleCenter,
  handleCode,
  handleColorInsert,
  handleContentChange,
  handleItalic,
  handleList,
  handleMentionClick,
  insertMention,
  mentionStatus,
  mentionResults,
  setShowColorPicker,
  showColorPicker,
  showMentionDropdown,
}: ArticleEditorProps) {
  const [showPreview, setShowPreview] = useState(false);
  return (
    <div className="group relative flex flex-col">
      {/* Content Textarea */}
      <div className="relative">
        <textarea
          ref={contentRef}
          value={content}
          onChange={handleContentChange}
          aria-label="Post content"
          placeholder="What would you like to share?"
          className="block w-full min-h-[170px] px-0 py-2 border-0 rounded-none text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] resize-none outline-none text-base leading-relaxed"
          style={{
            background: 'transparent',
            // The feed adds its own focus outline outside Tailwind's utility layer.
            outline: 'none',
            boxShadow: 'none',
          }}
        />
        {/* Mention Dropdown */}
        {showMentionDropdown && (
          <div
            aria-label="Mention suggestions"
            className="my-2 py-2 rounded-xl max-h-44 overflow-y-auto shadow-sm"
            style={{
              background: 'var(--card)',
            }}
          >
            {mentionStatus && (
              <p role="status" className="px-3 py-2 text-sm text-[var(--muted-foreground)]">
                {mentionStatus}
              </p>
            )}
            {mentionResults.map((user) => (
              <button
                key={user.id}
                type="button"
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => insertMention(user)}
                className="flex items-center gap-2 w-full px-4 py-2 hover:bg-[var(--accent)] transition-colors"
              >
                <UserAvatar
                  imageSrc={user.profileImage}
                  name={user.name}
                  className="h-8 w-8 shrink-0"
                />
                <div className="text-left">
                  <p className="text-sm font-medium text-[var(--foreground)]">{user.name}</p>
                  <p className="text-xs text-[var(--muted-foreground)]">@{user.username}</p>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
      {/* Formatting Toolbar */}
      <div
        className="flex flex-wrap items-center gap-0.5 py-2 mt-2 border-t border-[var(--border)] group-focus-within:border-[var(--muted-foreground)]"
        style={{
          background: 'var(--card)',
        }}
      >
        <button
          type="button"
          onClick={handleBold}
          className="p-2 rounded hover:bg-[var(--accent)] transition-colors"
          title="Bold (**text**)"
        >
          <Bold className="w-4 h-4 text-[var(--muted-foreground)]" />
        </button>
        <button
          type="button"
          onClick={handleItalic}
          className="p-2 rounded hover:bg-[var(--accent)] transition-colors"
          title="Italic (*text*)"
        >
          <Italic className="w-4 h-4 text-[var(--muted-foreground)]" />
        </button>
        <button
          type="button"
          onClick={handleList}
          className="p-2 rounded hover:bg-[var(--accent)] transition-colors"
          title="Bullet List"
        >
          <List className="w-4 h-4 text-[var(--muted-foreground)]" />
        </button>
        <button
          type="button"
          onClick={handleCode}
          className="p-2 rounded hover:bg-[var(--accent)] transition-colors"
          title="Code (`code`)"
        >
          <Code className="w-4 h-4 text-[var(--muted-foreground)]" />
        </button>
        <button
          type="button"
          onClick={handleCenter}
          className="p-2 rounded hover:bg-[var(--accent)] transition-colors"
          title="Center ([center]text[/center])"
        >
          <AlignCenter className="w-4 h-4 text-[var(--muted-foreground)]" />
        </button>
        <div className="w-px h-5 bg-[var(--muted)] mx-1" />
        <button
          type="button"
          onClick={handleMentionClick}
          className="p-2 rounded hover:bg-[var(--accent)] transition-colors"
          title="Mention someone (@)"
        >
          <AtSign className="w-4 h-4 text-[var(--muted-foreground)]" />
        </button>
        <div className="relative" ref={colorPickerRef}>
          <button
            type="button"
            onClick={() => setShowColorPicker(!showColorPicker)}
            className="p-2 rounded hover:bg-[var(--accent)] transition-colors"
            title="Text Color"
          >
            <Palette className="w-4 h-4 text-[var(--muted-foreground)]" />
          </button>
          {/* Color Picker Dropdown */}
          {showColorPicker && (
            <div
              className="absolute bottom-full right-0 mb-2 p-3 rounded-xl z-30 min-w-[200px]"
              style={{
                background: 'var(--card)',
              }}
            >
              <p className="text-xs font-medium text-[var(--muted-foreground)] mb-2 text-center">
                Choose Color
              </p>
              <div className="grid grid-cols-4 gap-2">
                {COLOR_PRESETS.map((color) => (
                  <button
                    key={color.value}
                    type="button"
                    onClick={() => handleColorInsert(color.value)}
                    className="group flex flex-col items-center gap-1"
                  >
                    <div
                      className="w-8 h-8 rounded-full border-2 border-white shadow-md hover:scale-110 hover:shadow-lg transition-all duration-200"
                      style={{ backgroundColor: color.value }}
                    />
                    <span className="text-[10px] text-[var(--muted-foreground)] group-hover:text-[var(--foreground)]">
                      {color.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        <button
          type="button"
          onClick={() => setShowPreview(!showPreview)}
          aria-pressed={showPreview}
          className="ml-auto px-2 py-1 text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
        >
          {showPreview ? 'Hide preview' : 'Preview'}
        </button>
      </div>
      {showPreview && content.trim() && (
        <div className="mt-2 rounded-lg bg-[var(--muted)] p-3">
          <FormattedContent content={content} className="text-[var(--foreground)] text-sm" />
        </div>
      )}
    </div>
  );
}
