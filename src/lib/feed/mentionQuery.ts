export function getMentionQuery(content: string, cursor: number) {
  const match = /(?:^|\s)@([\p{L}\p{N}_.]*)$/u.exec(content.slice(0, cursor));
  if (!match) return null;
  return { query: match[1], start: cursor - match[1].length - 1, end: cursor };
}

export function replaceMention(content: string, cursor: number, username: string) {
  const match = getMentionQuery(content, cursor);
  if (!match) return null;
  const inserted = `@${username} `;
  return {
    content: content.slice(0, match.start) + inserted + content.slice(match.end),
    cursor: match.start + inserted.length,
  };
}
