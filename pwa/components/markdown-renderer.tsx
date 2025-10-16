'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

interface MarkdownRendererProps {
  html: string;
  className?: string;
}

export const MarkdownRenderer = ({ html, className }: MarkdownRendererProps) => {
  return (
    <div
      className={cn('prose prose-custom dark:prose-invert', className)}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
