import { render, screen } from '@testing-library/react';
import App from './App';

test('renders exercise 9 and exercise 11 sections', () => {
  render(<App />);

  expect(screen.getByText(/React Component 1/i)).toBeInTheDocument();
  expect(screen.getByText(/React Component 2/i)).toBeInTheDocument();
  expect(screen.getByText(/Hello, World!/i)).toBeInTheDocument();
  expect(screen.getByText(/To-do List/i)).toBeInTheDocument();
});
