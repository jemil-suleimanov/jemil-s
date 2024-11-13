"use client";

import { BaseSidebar } from '@/app/shared/components/layout/BaseSidebar';
import React from 'react';

const AIChatSidebar: React.FC = () => {
  return (
    <BaseSidebar>
      <h2 className="text-xl font-bold mb-4">AI Chat</h2>
      <div className="space-y-4">
        <p>This is a placeholder for the AI Chat feature.</p>
        <p>In the future, you&apos;ll be able to interact with an AI assistant here to get help with coding, answer questions, or generate content.</p>
      </div>
    </BaseSidebar>
  );
};

export default AIChatSidebar;
