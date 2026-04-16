import { mockUsers } from '@/lib/mockdata';
import { NextResponse } from 'next/server';

//Get all user
export async function GET() {
  // mock delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  return NextResponse.json({
    success: true,
    data: mockUsers,
  });
}