import { render, screen } from '@testing-library/react';
import Header from './Header'

test('Render Header', () => {
    render(<Header />)
    expect(screen.getByText('My Weather')).toBeInTheDocument()
    expect(screen.getByRole('banner')).toBeInTheDocument()
})