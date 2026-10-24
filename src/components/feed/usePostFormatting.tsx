'use client';
import React from 'react';

interface usePostFormattingOptions {
  content: string;
  contentRef: React.RefObject<HTMLTextAreaElement | null>;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  setShowColorPicker: React.Dispatch<React.SetStateAction<boolean>>;
}
export function usePostFormatting({
  content,
  contentRef,
  setContent,
  setShowColorPicker,
}: usePostFormattingOptions) {
  const formatText = (prefix: string, suffix: string = prefix) => {
    const textarea = contentRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = content.slice(start, end);

    let newContent: string;
    let newCursorPos: number;

    if (selectedText) {
      // Wrap selected text
      newContent = content.slice(0, start) + prefix + selectedText + suffix + content.slice(end);
      newCursorPos = end + prefix.length + suffix.length;
    } else {
      // Insert placeholder at cursor
      newContent = content.slice(0, start) + prefix + suffix + content.slice(end);
      newCursorPos = start + prefix.length;
    }

    setContent(newContent);

    // Restore focus and cursor position
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(newCursorPos, newCursorPos);
    }, 0);
  };

  const handleBold = () => {
    formatText('**');
  };

  const handleItalic = () => {
    formatText('*');
  };

  const handleCode = () => {
    formatText('`');
  };

  const handleCenter = () => {
    formatText('[center]', '[/center]');
  };

  const handleList = () => {
    const textarea = contentRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const beforeCursor = content.slice(0, start);
    const afterCursor = content.slice(start);

    // Find the start of the current line
    const lineStart = beforeCursor.lastIndexOf('\n') + 1;
    const lineContent = beforeCursor.slice(lineStart);

    let newContent: string;
    let newCursorPos: number;

    // Check if line already starts with "- "
    if (lineContent.startsWith('- ')) {
      // Remove the list marker
      newContent = content.slice(0, lineStart) + lineContent.slice(2) + afterCursor;
      newCursorPos = start - 2;
    } else {
      // Add the list marker
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
      // Wrap selected text
      newContent = content.slice(0, start) + openTag + selectedText + closeTag + content.slice(end);
      newCursorPos = start + openTag.length + selectedText.length + closeTag.length;
    } else {
      // Insert placeholder and position cursor between tags
      newContent = content.slice(0, start) + openTag + closeTag + content.slice(start);
      newCursorPos = start + openTag.length;
    }

    setContent(newContent);
    setShowColorPicker(false);

    setTimeout(() => {
      textarea.focus();
      if (selectedText) {
        textarea.setSelectionRange(newCursorPos, newCursorPos);
      } else {
        textarea.setSelectionRange(newCursorPos, newCursorPos);
      }
    }, 0);
  };
  return {
    COLOR_PRESETS,
    handleBold,
    handleCenter,
    handleCode,
    handleColorInsert,
    handleItalic,
    handleList,
    handleMentionClick,
  };
}
