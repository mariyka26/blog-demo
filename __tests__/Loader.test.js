import { expect, test } from '@jest/globals'
import { render, screen } from '@testing-library/react';
import { Loader } from '../src/components/Loader/Loader';

test('Test Loader component', () => {
    render(<Loader />);

    const loaderElement = screen.getByRole('status');
    expect(loaderElement).toBeInTheDocument();

    const loadingText = screen.getByText('Loading...');
    expect(loadingText).toBeInTheDocument();
    expect(loadingText).toHaveClass('visually-hidden');

    expect(loaderElement).toHaveClass('spinner-border');
});