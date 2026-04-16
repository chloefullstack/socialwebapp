import { render, screen } from '@testing-library/react';
import UserCard from './UserCard';
import { User } from '@/types';

const mockUser: User = {
  id: '1',
  username: 'john_doe',
  displayName: 'John Doe',
  bio: 'Test bio',
  avatarUrl: 'https://example.com/avatar.jpg',
  location: 'NYC',
  email: 'john@example.com',
  joinedAt: '2023-01-01T00:00:00Z',
  friendIds: ['2', '3'],
};

describe('UserCard', () => {
  it('renders user information', () => {
    render(<UserCard user={mockUser} />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Test bio')).toBeInTheDocument();
    expect(screen.getByText('2 Followers')).toBeInTheDocument();
  });

  it('renders avatar', () => {
    render(<UserCard user={mockUser} />);
    const avatar = screen.getByRole('img');
    expect(avatar).toHaveAttribute('src', 'https://example.com/avatar.jpg');
    expect(avatar).toHaveAttribute('alt', 'John Doe');
  });

  it('links to user profile', () => {
    render(<UserCard user={mockUser} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/profile/1');
  });
});