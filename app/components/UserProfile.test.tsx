import { render, screen } from '@testing-library/react';
import UserProfile from './UserProfile';
import { User } from '@/types';

const mockUser: User = {
  id: '1',
  username: 'john_doe',
  displayName: 'John Doe',
  bio: 'Test bio for user',
  avatarUrl: 'https://example.com/avatar.jpg',
  location: 'New York, NY',
  email: 'john@example.com',
  joinedAt: '2023-01-15T08:00:00Z',
  friendIds: ['2', '3'],
};

describe('UserProfile', () => {
  it('renders user profile information', () => {
    render(<UserProfile user={mockUser} />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('@john_doe')).toBeInTheDocument();
    expect(screen.getByText('New York, NY')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
    expect(screen.getByText('Test bio for user')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument(); // friend count
  });

  it('renders avatar', () => {
    render(<UserProfile user={mockUser} />);
    const avatar = screen.getByRole('img');
    expect(avatar).toHaveAttribute('src', 'https://example.com/avatar.jpg');
    expect(avatar).toHaveAttribute('alt', 'John Doe');
  });

  it('formats joined date', () => {
    render(<UserProfile user={mockUser} />);
    expect(screen.getByText('January 15, 2023')).toBeInTheDocument();
  });
});