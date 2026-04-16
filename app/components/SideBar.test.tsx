import { render, screen, fireEvent } from '@testing-library/react';
import Sidebar from './SideBar';
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
  friendIds: [],
};

describe('Sidebar', () => {
  const mockOnTabClick = jest.fn();

  it('renders user profile info', () => {
    render(<Sidebar user={mockUser} activeTab={0} onTabClick={mockOnTabClick} />);
    expect(screen.getByText('My Profile')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('@john_doe')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', 'https://example.com/avatar.jpg');
  });

  it('renders tabs', () => {
    render(<Sidebar user={mockUser} activeTab={0} onTabClick={mockOnTabClick} />);
    expect(screen.getByText('Posts')).toBeInTheDocument();
    expect(screen.getByText('Friends')).toBeInTheDocument();
    expect(screen.getByText('Profile')).toBeInTheDocument();
  });

  it('calls onTabClick when tab is clicked', () => {
    render(<Sidebar user={mockUser} activeTab={0} onTabClick={mockOnTabClick} />);
    const friendsTab = screen.getByText('Friends');
    fireEvent.click(friendsTab);
    expect(mockOnTabClick).toHaveBeenCalledWith(1);
  });

  it('renders back to home button', () => {
    render(<Sidebar user={mockUser} activeTab={0} onTabClick={mockOnTabClick} />);
    expect(screen.getByRole('link', { name: /back to home/i })).toBeInTheDocument();
  });
});