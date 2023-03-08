import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Search from '.';

const value = 'test'
const setValue = jest.fn();

test('render component value', async () => {
  render(<Search value={value} setValue={setValue} />)

  const input = screen.getByDisplayValue('test')
  expect(input).toBeInTheDocument()
})