import { fireEvent, render, screen } from '@testing-library/react';
import Content from './Content'

test('Render Content', () => {
    render(<Content />)
    expect(screen.getByRole('main')).toBeInTheDocument()
})

test('Button Here! to be in the document', () => {
    render(<Content />)
    expect(screen.getByText('Here!')).toBeInTheDocument()
})

test('Input to be in the document and can change', () => {
    render(<Content />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    fireEvent.change(screen.getByRole('textbox'), {
        target: { value: 'London' }
    })
    expect(screen.getByRole('textbox').value).toBe('London');

})