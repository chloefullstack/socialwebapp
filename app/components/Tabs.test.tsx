import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Tabs from './Tabs';

const mockTabs = [
  { name: 'Tab 1', isActive: true },
  { name: 'Tab 2', isActive: false },
  { name: 'Tab 3', isActive: false },
];

describe('Tabs', () => {
  const mockOnClickTab = jest.fn();

  it('renders all tabs', () => {
    render(<Tabs tabs={mockTabs} onClickTab={mockOnClickTab} />);
    expect(screen.getByText('Tab 1')).toBeInTheDocument();
    expect(screen.getByText('Tab 2')).toBeInTheDocument();
    expect(screen.getByText('Tab 3')).toBeInTheDocument();
  });

  it('calls onClickTab with correct index', () => {
    render(<Tabs tabs={mockTabs} onClickTab={mockOnClickTab} />);
    const tab2 = screen.getByText('Tab 2');
    fireEvent.click(tab2);
    expect(mockOnClickTab).toHaveBeenCalledWith(1);
  });
});