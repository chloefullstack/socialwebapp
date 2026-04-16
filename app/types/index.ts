export interface User {
  id: string;
  username: string;
  displayName: string;
  bio: string;
  avatarUrl: string;
  location: string;
  email: string;
  joinedAt: string;
  friendIds: string[];
};

export interface Post{
  id: string;
  authorId: string;
  content: string;
  createdAt: string;
  imageUrl?: string;
};