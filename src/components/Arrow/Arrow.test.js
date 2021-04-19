import { fireEvent, render, screen } from '@testing-library/react';
import Arrow from './Arrow'

const mock = jest.fn();


test('Render Arrow', () => {
    render(<Arrow onClick={mock} />)
    expect(screen.getByRole('button')).toBeInTheDocument()
})

test('Arrow onClick', () => {
    render(<Arrow onClick={mock} />)
    fireEvent.click(screen.getByRole('button'))
    expect(mock).toBeCalledTimes(1)
})