import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import PostCard from './PostCard';
import { Post } from '@/types';

// Mock fetch
global.fetch = jest.fn();

const mockPost: Post = {
  id: '1',
  authorId: '1',
  content: 'This is a short post.',
  createdAt: '2023-01-01T00:00:00Z',
};

const mockAuthor = {
  id: '1',
  username: 'john_doe',
  displayName: 'John Doe',
  bio: 'Bio',
  avatarUrl: 'https://example.com/avatar.jpg',
  location: 'NYC',
  email: 'john@example.com',
  joinedAt: '2023-01-01T00:00:00Z',
  friendIds: [],
};

describe('PostCard', () => {
  beforeEach(() => {
    (global.fetch as jest.Mock).mockResolvedValue({
      json: () => Promise.resolve({ success: true, data: mockAuthor }),
    });
  });

  it('renders post content', async () => {
    render(<PostCard post={mockPost} />);
    await waitFor(() => {
      expect(screen.getByText('This is a short post.')).toBeInTheDocument();
    });
  });

  it('renders author information', async () => {
    render(<PostCard post={mockPost} />);
    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('@john_doe')).toBeInTheDocument();
    });
  });

  it('renders author avatar', async () => {
    render(<PostCard post={mockPost} />);
    await waitFor(() => {
      const avatar = screen.getByRole('img');
      expect(avatar).toHaveAttribute('src', 'https://example.com/avatar.jpg');
    });
  });

  it('shows expand button for long content', async () => {
    const longPost = { ...mockPost, content: 'A'.repeat(200) };
    render(<PostCard post={longPost} />);
    await waitFor(() => {
      expect(screen.getByText('View more detail')).toBeInTheDocument();
    });
  });

  it('expands content when clicked', async () => {
    const longPost = { ...mockPost, content: 'A'.repeat(200) };
    render(<PostCard post={longPost} />);
    await waitFor(() => {
      const expandButton = screen.getByText('View more detail');
      fireEvent.click(expandButton);
      expect(screen.getByText('Show less')).toBeInTheDocument();
    });
  });
});