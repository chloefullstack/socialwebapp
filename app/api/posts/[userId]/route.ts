import { mockPosts, mockUsers } from '@/lib/mockdata';
import { NextResponse } from 'next/server';

// Get all posts from friends of the user
export async function GET(
  request: Request,
  { params }: { params: Promise<{ userId: string }> }
) {
  const { userId } = await params;
  // Get all friends of the user
  const user = mockUsers.find(u => u.id === userId);
  const friendIds = user?.friendIds;

  // Get all posts from friends, sorted by createdAt descending
  const friendsPosts = mockPosts
    .filter(post => friendIds?.includes(post.authorId))
    .sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    ); 

  // mock delay
  await new Promise(resolve => setTimeout(resolve, 450));

  return NextResponse.json({
    success: true,
    data: friendsPosts,
    count: friendsPosts.length,
  });
}