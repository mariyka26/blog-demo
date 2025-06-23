import { expect, test } from '@jest/globals'
import { Title } from '../src/components/Title/Title'
import { render, screen } from '@testing-library/react'

test('Test component Title', () => {
    const content = 'Test Title'
    render(<Title>{content}</Title>)
    const titleElement = screen.getByText(content);

    expect(titleElement).toBeInTheDocument()
    expect(titleElement).toHaveTextContent(content)
    expect(titleElement).toHaveClass('fw-bold mb-4')
})