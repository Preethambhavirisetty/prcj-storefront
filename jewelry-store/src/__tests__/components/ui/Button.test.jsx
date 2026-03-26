import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../../../components/ui/Button.jsx';

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('calls onClick when clicked', async () => {
    const handler = vi.fn();
    render(<Button onClick={handler}>Click</Button>);
    await userEvent.click(screen.getByRole('button'));
    expect(handler).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when disabled', async () => {
    const handler = vi.fn();
    render(<Button onClick={handler} disabled>Click</Button>);
    await userEvent.click(screen.getByRole('button'));
    expect(handler).not.toHaveBeenCalled();
  });

  it('applies ghost variant classes', () => {
    render(<Button variant="ghost">Ghost</Button>);
    const btn = screen.getByRole('button');
    expect(btn.className).toContain('border');
  });
});
