'use client';
import { AnimatePresence, motion } from 'framer-motion';
import {
  AlignCenter,
  AtSign,
  Bold,
  ChevronDown,
  Code,
  Italic,
  List,
  Loader2,
  Palette,
  Pencil,
  X,
} from 'lucide-react';
import React from 'react';

interface EditPostDialogViewProps {
  COLOR_PRESETS: { name: string; value: string }[];
  VISIBILITY_OPTIONS: {
    value: import('@/types/post').PostVisibility;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
  }[];
  VisibilityIcon: React.ComponentType<{ className?: string }>;
  colorPickerRef: React.RefObject<HTMLDivElement | null>;
  content: string;
  contentRef: React.RefObject<HTMLTextAreaElement | null>;
  error: string | null;
  handleBold: () => void;
  handleCenter: () => void;
  handleCode: () => void;
  handleColorInsert: (colorValue: string) => void;
  handleContentChange: (e: React.ChangeEvent<HTMLTextAreaElement, Element>) => void;
  handleItalic: () => void;
  handleList: () => void;
  handleMentionClick: () => void;
  handleSubmit: () => Promise<void>;
  insertMention: (user: import('@/types/post').MentionUser) => void;
  isOpen: true;
  isSubmitting: boolean;
  mentionResults: import('@/types/post').MentionUser[];
  onClose: () => void;
  post: import('@/types/post').Post;
  selectedVisibility: {
    value: import('@/types/post').PostVisibility;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
  };
  setShowColorPicker: React.Dispatch<React.SetStateAction<boolean>>;
  setShowVisibilityDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  setVisibility: React.Dispatch<React.SetStateAction<import('@/types/post').PostVisibility>>;
  showColorPicker: boolean;
  showMentionDropdown: boolean;
  showVisibilityDropdown: boolean;
  user: import('@/types/auth').User | null;
}

export function EditPostDialogView({
  COLOR_PRESETS,
  VISIBILITY_OPTIONS,
  VisibilityIcon,
  colorPickerRef,
  content,
  contentRef,
  error,
  handleBold,
  handleCenter,
  handleCode,
  handleColorInsert,
  handleContentChange,
  handleItalic,
  handleList,
  handleMentionClick,
  handleSubmit,
  insertMention,
  isOpen,
  isSubmitting,
  mentionResults,
  onClose,
  post,
  selectedVisibility,
  setShowColorPicker,
  setShowVisibilityDropdown,
  setVisibility,
  showColorPicker,
  showMentionDropdown,
  showVisibilityDropdown,
  user,
}: EditPostDialogViewProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl"
            style={{
              background: '#ecf0f3',
              boxShadow: '20px 20px 60px #c9ccd1, -20px -20px 60px #ffffff',
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between p-6 border-b"
              style={{ borderColor: '#d1d9e6' }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="p-2 rounded-lg"
                  style={{
                    background: '#ecf0f3',
                    boxShadow: '4px 4px 8px #d1d9e6, -4px -4px 8px #f9f9f9',
                  }}
                >
                  <Pencil className="w-5 h-5 text-blue-600" />
                </div>
                <h2
                  className="text-xl font-bold"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    color: '#2d3748',
                  }}
                >
                  Edit Post
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full transition-all hover:scale-105"
                style={{
                  background: '#ecf0f3',
                  boxShadow: '4px 4px 8px #d1d9e6, -4px -4px 8px #f9f9f9',
                }}
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* User Info & Visibility */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-full overflow-hidden"
                    style={{
                      boxShadow: '4px 4px 8px #d1d9e6, -4px -4px 8px #f9f9f9',
                    }}
                  >
                    {user?.profileImage ? (
                      <img
                        src={user.profileImage}
                        alt={user.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold">
                        {user?.name?.charAt(0).toUpperCase() || 'U'}
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{user?.name}</p>
                    <div className="relative">
                      <button
                        onClick={() => setShowVisibilityDropdown(!showVisibilityDropdown)}
                        className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
                      >
                        <VisibilityIcon className="w-3 h-3" />
                        <span>{selectedVisibility.label}</span>
                        <ChevronDown className="w-3 h-3" />
                      </button>

                      {showVisibilityDropdown && (
                        <div
                          className="absolute top-full left-0 mt-1 py-1 rounded-lg z-20 min-w-[140px]"
                          style={{
                            background: '#ecf0f3',
                            boxShadow: '4px 4px 8px #d1d9e6, -4px -4px 8px #f9f9f9',
                          }}
                        >
                          {VISIBILITY_OPTIONS.map((option) => (
                            <button
                              key={option.value}
                              onClick={() => {
                                setVisibility(option.value);
                                setShowVisibilityDropdown(false);
                              }}
                              className="flex items-center gap-2 w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                            >
                              <option.icon className="w-4 h-4 text-gray-500" />
                              <span className="text-gray-700">{option.label}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
                  {post.type}
                </span>
              </div>

              {/* Error Message */}
              {error && (
                <div className="p-3 rounded-lg bg-red-50 text-red-600 text-sm">{error}</div>
              )}

              {/* Rich Text Editor Area */}
              <div className="relative">
                {/* Formatting Toolbar */}
                <div
                  className="flex items-center gap-2 p-2 mb-2 rounded-lg"
                  style={{
                    background: '#ecf0f3',
                    boxShadow: 'inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #f9f9f9',
                  }}
                >
                  <button
                    type="button"
                    onClick={handleBold}
                    className="p-2 rounded hover:bg-gray-200 transition-colors"
                    title="Bold (**text**)"
                  >
                    <Bold className="w-4 h-4 text-gray-600" />
                  </button>
                  <button
                    type="button"
                    onClick={handleItalic}
                    className="p-2 rounded hover:bg-gray-200 transition-colors"
                    title="Italic (*text*)"
                  >
                    <Italic className="w-4 h-4 text-gray-600" />
                  </button>
                  <button
                    type="button"
                    onClick={handleList}
                    className="p-2 rounded hover:bg-gray-200 transition-colors"
                    title="Bullet List"
                  >
                    <List className="w-4 h-4 text-gray-600" />
                  </button>
                  <button
                    type="button"
                    onClick={handleCode}
                    className="p-2 rounded hover:bg-gray-200 transition-colors"
                    title="Code (`code`)"
                  >
                    <Code className="w-4 h-4 text-gray-600" />
                  </button>
                  <button
                    type="button"
                    onClick={handleCenter}
                    className="p-2 rounded hover:bg-gray-200 transition-colors"
                    title="Center ([center]text[/center])"
                  >
                    <AlignCenter className="w-4 h-4 text-gray-600" />
                  </button>
                  <div className="w-px h-5 bg-gray-300 mx-1" />
                  <button
                    type="button"
                    onClick={handleMentionClick}
                    className="p-2 rounded hover:bg-gray-200 transition-colors"
                    title="Mention someone (@)"
                  >
                    <AtSign className="w-4 h-4 text-gray-600" />
                  </button>
                  <div className="relative" ref={colorPickerRef}>
                    <button
                      type="button"
                      onClick={() => setShowColorPicker(!showColorPicker)}
                      className="p-2 rounded hover:bg-gray-200 transition-colors"
                      title="Text Color"
                    >
                      <Palette className="w-4 h-4 text-gray-600" />
                    </button>
                    {/* Color Picker Dropdown */}
                    {showColorPicker && (
                      <div
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 p-3 rounded-xl z-30 min-w-[200px]"
                        style={{
                          background: '#ecf0f3',
                          boxShadow: '6px 6px 12px #d1d9e6, -6px -6px 12px #ffffff',
                        }}
                      >
                        <p className="text-xs font-medium text-gray-500 mb-2 text-center">
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
                              <span className="text-[10px] text-gray-500 group-hover:text-gray-700">
                                {color.name}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content Textarea */}
                <div className="relative">
                  <textarea
                    ref={contentRef}
                    value={content}
                    onChange={handleContentChange}
                    placeholder="What do you want to share?"
                    className="w-full min-h-[180px] p-5 rounded-xl text-gray-800 placeholder-gray-400 resize-none outline-none text-base leading-relaxed"
                    style={{
                      background: '#ecf0f3',
                      boxShadow: 'inset 4px 4px 8px #d1d9e6, inset -4px -4px 8px #f9f9f9',
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  />

                  {/* Mention Dropdown */}
                  {showMentionDropdown && (
                    <div
                      className="absolute bottom-full left-0 w-64 mb-2 py-2 rounded-lg max-h-48 overflow-y-auto z-20"
                      style={{
                        background: '#ecf0f3',
                        boxShadow: '4px 4px 8px #d1d9e6, -4px -4px 8px #f9f9f9',
                      }}
                    >
                      {mentionResults.map((user) => (
                        <button
                          key={user.id}
                          onClick={() => insertMention(user)}
                          className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 transition-colors"
                        >
                          <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-300">
                            {user.profileImage && (
                              <img
                                src={user.profileImage}
                                alt={user.name}
                                className="w-full h-full object-cover"
                              />
                            )}
                          </div>
                          <div className="text-left">
                            <p className="text-sm font-medium text-gray-800">{user.name}</p>
                            <p className="text-xs text-gray-500">@{user.username}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Post type note */}
              <p className="text-xs text-gray-400 text-center">
                Note: Only text content and visibility can be edited. Media, polls, and links cannot
                be changed.
              </p>
            </div>

            {/* Footer */}
            <div className="flex justify-end gap-3 p-6 border-t" style={{ borderColor: '#d1d9e6' }}>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl text-gray-600 font-medium transition-all hover:scale-105"
                style={{
                  background: '#ecf0f3',
                  boxShadow: '4px 4px 8px #d1d9e6, -4px -4px 8px #f9f9f9',
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={isSubmitting || !content.trim()}
                className="px-8 py-2.5 rounded-xl text-white font-semibold transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  boxShadow: '4px 4px 8px #d1d9e6, -4px -4px 8px #f9f9f9',
                }}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Saving...
                  </span>
                ) : (
                  'Save Changes'
                )}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
