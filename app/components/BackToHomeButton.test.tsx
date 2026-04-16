import { render, screen } from '@testing-library/react';
import BackToHomeButton from './BackToHomeButton';

describe('BackToHomeButton', () => {
  it('renders a link to home', () => {
    render(<BackToHomeButton />);
    const link = screen.getByRole('link', { name: /back to home/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
  });
});