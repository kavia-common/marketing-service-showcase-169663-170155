import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

/**
 * These tests cover:
 * - Initial rendering of key UI elements
 * - Theme toggle interaction and document data-theme attribute
 * - Accessibility labels for the toggle button
 * - External link presence and attributes
 */

describe('App Component - Marketing Frontend', () => {
  test('renders core UI elements on initial load', () => {
    render(<App />);

    // Logo by alt text
    expect(screen.getByAltText(/logo/i)).toBeInTheDocument();

    // Learn React link visible
    const link = screen.getByRole('link', { name: /learn react/i });
    expect(link).toBeInTheDocument();

    // Instructional text is visible
    expect(screen.getByText(/Edit/i)).toBeInTheDocument();

    // Theme text shows "Current theme: light" initially
    expect(screen.getByText(/Current theme:/i)).toBeInTheDocument();
    expect(screen.getByText(/light/i)).toBeInTheDocument();

    // Toggle button present with correct aria-label for switching to dark
    const toggleBtn = screen.getByRole('button', { name: /Switch to dark mode/i });
    expect(toggleBtn).toBeInTheDocument();
  });

  test('applies light theme to document by default', () => {
    render(<App />);
    // The component sets data-theme on document.documentElement
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
  });

  test('toggles theme to dark and updates aria-label and UI text', async () => {
    const user = userEvent.setup();
    render(<App />);

    const toggleBtn = screen.getByRole('button', { name: /Switch to dark mode/i });
    await user.click(toggleBtn);

    // After click, document theme should be dark
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');

    // Button aria-label now should switch to light mode
    expect(
      screen.getByRole('button', { name: /Switch to light mode/i })
    ).toBeInTheDocument();

    // "Current theme" text should reflect dark
    expect(screen.getByText(/Current theme:/i)).toBeInTheDocument();
    expect(screen.getByText(/dark/i)).toBeInTheDocument();
  });

  test('toggles dark back to light on second click', async () => {
    const user = userEvent.setup();
    render(<App />);

    // Dark
    await user.click(screen.getByRole('button', { name: /Switch to dark mode/i }));
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');

    // Back to light
    await user.click(screen.getByRole('button', { name: /Switch to light mode/i }));
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');

    // Aria label returns to dark mode suggestion
    expect(
      screen.getByRole('button', { name: /Switch to dark mode/i })
    ).toBeInTheDocument();
  });

  test('external Learn React link has correct attributes', () => {
    render(<App />);
    const link = screen.getByRole('link', { name: /learn react/i });

    // Should point to React docs
    expect(link).toHaveAttribute('href', 'https://reactjs.org');

    // Best practices for external link
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'));
  });
});
