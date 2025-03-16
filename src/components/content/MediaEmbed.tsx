"use client";

import React from 'react';

type MediaEmbedProps = {
  type: 'youtube' | 'instagram' | 'tiktok';
  id: string;
  title?: string;
  aspectRatio?: '16:9' | '4:3' | '1:1' | '9:16';
  className?: string;
};

export default function MediaEmbed({
  type,
  id,
  title = '',
  aspectRatio = '16:9',
  className = '',
}: MediaEmbedProps) {
  // Function to determine aspect ratio class
  const getAspectRatioClass = () => {
    switch (aspectRatio) {
      case '4:3':
        return 'aspect-[4/3]';
      case '1:1':
        return 'aspect-square';
      case '9:16':
        return 'aspect-[9/16]';
      case '16:9':
      default:
        return 'aspect-video';
    }
  };

  // Render different embeds based on the type
  const renderEmbed = () => {
    switch (type) {
      case 'youtube':
        return (
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            title={title || 'YouTube video player'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        );
      
      case 'instagram':
        return (
          <iframe
            src={`https://www.instagram.com/p/${id}/embed`}
            title={title || 'Instagram post'}
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        );
      
      case 'tiktok':
        return (
          <iframe
            src={`https://www.tiktok.com/embed/${id}`}
            title={title || 'TikTok video'}
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        );
      
      default:
        return (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
            <p className="text-gray-500 dark:text-gray-400">
              Media type not supported
            </p>
          </div>
        );
    }
  };

  return (
    <div className={`relative ${getAspectRatioClass()} ${className}`}>
      {renderEmbed()}
    </div>
  );
}
