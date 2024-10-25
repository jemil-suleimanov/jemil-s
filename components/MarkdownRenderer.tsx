// MarkdownRenderer.js
import React from 'react';
import MarkdownIt from 'markdown-it';

const MarkdownRenderer = ({ markdown }: { markdown: string }) => {
  // Initialize markdown-it
  const md = new MarkdownIt();

  // Convert markdown to HTML
  const htmlContent = md.render(markdown);

  return (
    <div
      className="markdown-content"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export default MarkdownRenderer;
