import { render, screen } from '@testing-library/react';
import Friends from './Friends';
import { User } from '@/types';

const mockFriends: User[] = [
  {
    id: '1',
    username: 'mock_user1',
    displayName: 'Mock User 1',
    bio: 'Test bio',
    avatarUrl: 'https://example.com/avatar1.jpg',
    location: 'NYC',
    email: 'mock_user1@example.com',
    joinedAt: '2023-01-01T00:00:00Z',
    friendIds: [],
  },
  {
    id: '2',
    username: 'mock_user2',
    displayName: 'Mock User 2',
    bio: 'Another bio',
    avatarUrl: 'https://example.com/avatar2.jpg',
    location: 'LA',
    email: 'mock_user2@example.com',
    joinedAt: '2023-01-02T00:00:00Z',
    friendIds: [],
  },
];

describe('Friends', () => {
  it('renders the friends list', () => {
    render(<Friends list={mockFriends} />);
    expect(screen.getByText('Friends')).toBeInTheDocument();
    expect(screen.getByText('Mock User 1')).toBeInTheDocument();
    expect(screen.getByText('@mock_user1')).toBeInTheDocument();
    expect(screen.getByText('Mock User 2')).toBeInTheDocument();
    expect(screen.getByText('@mock_user2')).toBeInTheDocument();
  });

  it('renders friend avatars', () => {
    render(<Friends list={mockFriends} />);
    const avatars = screen.getAllByRole('img');
    expect(avatars).toHaveLength(2);
    expect(avatars[0]).toHaveAttribute('src', 'https://example.com/avatar1.jpg');
    expect(avatars[1]).toHaveAttribute('src', 'https://example.com/avatar2.jpg');
  });

  it('renders empty list', () => {
    render(<Friends list={[]} />);
    expect(screen.getByText('Friends')).toBeInTheDocument();
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });
});