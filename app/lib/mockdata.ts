import { User, Post } from '@/types';

export const mockUsers: User[] = [
  {
    id: "u1",
    username: "alex_chen",
    displayName: "Alex Chen",
    bio: "Designer by day, photographer by night. Making pixels matter.",
    avatarUrl: "https://api.dicebear.com/9.x/notionists/svg?seed=alex&backgroundColor=b6e3f4",
    location: "San Francisco, CA",
    email: "alex.chen@example.com",
    joinedAt: "2022-03-15T08:00:00Z",
    friendIds: ["u2", "u3", "u4", "u5"],
  },
  {
    id: "u2",
    username: "maya_patel",
    displayName: "Maya Patel",
    bio: "Software engineer @ Vercel. Open source contributor. Coffee ritualist.",
    avatarUrl: "https://api.dicebear.com/9.x/notionists/svg?seed=maya&backgroundColor=ffdfbf",
    location: "New York, NY",
    email: "maya.patel@example.com",
    joinedAt: "2021-11-02T10:30:00Z",
    friendIds: ["u1", "u3", "u5"],
  },
  {
    id: "u3",
    username: "jordan_rivers",
    displayName: "Jordan Rivers",
    bio: "Building in public. Founder of @StreamlitUI. Runner.",
    avatarUrl: "https://api.dicebear.com/9.x/notionists/svg?seed=jordan&backgroundColor=c0aede",
    location: "Austin, TX",
    email: "jordan.rivers@example.com",
    joinedAt: "2022-07-20T14:00:00Z",
    friendIds: ["u1", "u2", "u4"],
  },
  {
    id: "u4",
    username: "sam_okoro",
    displayName: "Sam Okoro",
    bio: "Product @ Notion. Obsessed with good writing and minimal UIs.",
    avatarUrl: "https://api.dicebear.com/9.x/notionists/svg?seed=sam&backgroundColor=d1f4cc",
    location: "London, UK",
    email: "sam.okoro@example.com",
    joinedAt: "2023-01-10T09:00:00Z",
    friendIds: ["u1", "u3"],
  },
  {
    id: "u5",
    username: "priya_sharma",
    displayName: "Priya Sharma",
    bio: "Data scientist. Turning noise into signal. Based in 🌏.",
    avatarUrl: "https://api.dicebear.com/9.x/notionists/svg?seed=priya&backgroundColor=ffd5dc",
    location: "Singapore",
    email: "priya.sharma@example.com",
    joinedAt: "2022-09-05T11:15:00Z",
    friendIds: ["u1", "u2"],
  },
];

export const mockPosts: Post[] = [
  {
    id: "p1",
    authorId: "u2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    createdAt: "2026-04-14T09:22:00Z",
  },
  {
    id: "p2",
    authorId: "u3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    createdAt: "2026-04-13T16:40:00Z",
  },
  {
    id: "p3",
    authorId: "u4",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    createdAt: "2026-04-13T11:30:00Z",
  },
  {
    id: "p4",
    authorId: "u5",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    createdAt: "2026-04-12T20:15:00Z",
  },
  {
    id: "p5",
    authorId: "u2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    createdAt: "2026-04-11T14:00:00Z",
  },
];
