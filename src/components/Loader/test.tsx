import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Loader from '.';

test('render component with correct styles', async () => {
  render(<Loader/>)

  const loader = screen.getByTestId('loader')
  expect(loader).toBeInTheDocument()

  const styles = getComputedStyle(loader)
  expect(styles.border).toBe('16px solid #767676')
  expect(styles.animation).toBe('spin 2s linear infinite')
})