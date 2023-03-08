import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Home from '.';

test('render components', () => {
  render(<Home />)

  const header = screen.getByTestId('header')
  expect(header).toBeInTheDocument()

  const searchBar = screen.getByTestId('search-bar')
  expect(searchBar).toBeInTheDocument()

  const resultList = screen.getByTestId('result-list')
  expect(resultList).toBeInTheDocument()
})
