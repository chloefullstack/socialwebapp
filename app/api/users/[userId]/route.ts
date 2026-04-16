import { mockUsers } from '@/lib/mockdata';
import { NextResponse } from 'next/server';

// Get user by Id
export async function GET(
  request: Request,
  { params }: { params: Promise<{ userId: string }> }
) {
  const { userId } = await params;
  
  const user = mockUsers.find(u => u.id === userId);
  
  // mock delay
  await new Promise(resolve => setTimeout(resolve, 400));

  if (!user) {
    return NextResponse.json(
      { success: false, message: 'User Not Found' },
      { status: 404 }
    );
  }

  return NextResponse.json({
    success: true,
    data: user,
  });
}