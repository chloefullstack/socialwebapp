'use client';

import { Post, User } from '@/types';
import { useEffect, useState } from 'react';

interface Props {
  post: Post;
}

export default function PostCard({ post }: Props) {
  const [author, setAuthor] = useState<User | null>(null);
  const [hasError, setHasError] = useState<boolean>(false);
  const [showFullContent, setShowFullContent] = useState<boolean>(false);

  const isLongContent = post.content.length > 180;

  useEffect(() => {
    (async () => {
        fetch(`/api/users/${post.authorId}`)
        .then(res => res.json())
        .then(data => {
          if (data.success) setAuthor(data.data);
        })
        .catch(err => {
          console.error('Error fetching user:', err);
          setHasError(true);
        })
    })()
  }, [])

  if (hasError) {
    return (
      <div className="bg-white rounded-2xl border overflow-hidden p-4">
        <p className="text-red-500">Failed to load post author.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl overflow-hidden">
      <div className="p-4 flex items-center gap-3">
        <img src={author?.avatarUrl} className="w-10 h-10 rounded-full" />
        <div>
          <p className="text-black font-semibold">{author?.displayName}</p>
          <p className="text-sm text-gray-500">@{author?.username}</p>
        </div>
      </div>

      <div className="px-4 pb-2 min-h-[100px]">
        <p
          className={`text-black text-[15px] leading-relaxed transition-all duration-200 ${
            !showFullContent && isLongContent ? 'max-h-20 overflow-hidden' : ''
          }`}
        >
          {post.content}
          {post.imageUrl && showFullContent && (
            <img src={post.imageUrl} className="w-full" alt="post" />
          )}
        </p>
        {isLongContent && (
          <span
            onClick={() => setShowFullContent((prev) => !prev)}
            className="mt-3 inline-block cursor-pointer text-sm font-semibold text-sky-600 hover:text-sky-800"
          >
            {showFullContent ? 'Show less' : 'View more detail'}
          </span>
        )}
      </div>
    </div>
  );
}