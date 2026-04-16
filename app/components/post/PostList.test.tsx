import { render, screen, waitFor, act } from '@testing-library/react';
import PostList from './PostList';
import { Post } from '@/types';

// Mock fetch
global.fetch = jest.fn();

const mockPosts: Post[] = [
  {
    id: '1',
    authorId: '1',
    content: 'Post 1',
    createdAt: '2023-01-01T00:00:00Z',
  },
  {
    id: '2',
    authorId: '1',
    content: 'Post 2',
    createdAt: '2023-01-02T00:00:00Z',
  },
];

describe('PostList', () => {
  beforeEach(() => {
    (global.fetch as jest.Mock).mockResolvedValue({
      json: () => Promise.resolve({ data: mockPosts }),
    });
  });

  it('renders posts title', () => {
    render(<PostList userId="1" />);
    expect(screen.getByText('Posts')).toBeInTheDocument();
  });

  it('fetches and renders posts', async () => {
    render(<PostList userId="1" />);
    await waitFor(() => {
      expect(screen.getByText('Post 1')).toBeInTheDocument();
      expect(screen.getByText('Post 2')).toBeInTheDocument();
    });
  });

  it('calls fetch with correct URL', () => {
    render(<PostList userId="1" />);
    expect(global.fetch).toHaveBeenCalledWith('/api/posts/1');
  });
});