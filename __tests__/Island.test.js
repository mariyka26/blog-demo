import { render, screen } from '@testing-library/react';
import { Island } from '../src/components/Island/Island';
import { expect, test } from '@jest/globals'

describe('Island Component', () => {
    test('renders title when provided', () => {
        render(<Island title="Test Title">Content</Island>);
        const titleElement = screen.getByText(/Test Title/i);
        expect(titleElement).toBeInTheDocument();
    });

    test('does not render title when not provided', () => {
        render(<Island>Content without title</Island>);
        const titleElement = screen.queryByText(/Test Title/i);
        expect(titleElement).not.toBeInTheDocument();
    });

    test('renders children correctly', () => {
        render(<Island title="Test Title">This is the content</Island>);
        const contentElement = screen.getByText(/This is the content/i);
        expect(contentElement).toBeInTheDocument();
    });
});