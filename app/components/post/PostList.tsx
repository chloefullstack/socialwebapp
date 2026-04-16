'use client';

import { useEffect, useState } from 'react';
import PostCard from './PostCard';
import { Post } from '@/types';

export default function PostList({ userId }: { userId: string }) {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch(`/api/posts/${userId}`)
      .then(res => res.json())
      .then(result => {
        setPosts(result.data);
      });
  }, []);

  return (
    <div className="space-y-6 p-4">
      <h2 className="text-black text-2xl font-bold mb-4">Posts</h2>
      {posts.map(post => <PostCard key={post.id} post={post} />)}
    </div>
  );
}