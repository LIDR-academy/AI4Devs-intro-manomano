import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders Reverse String title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Reverse String/i);
  expect(linkElement).toBeInTheDocument();
});

test('reverses string correctly on input change', () => {
  render(<App />);
  const inputElement = screen.getByLabelText(/Enter text/i);
  fireEvent.change(inputElement, { target: { value: 'hello' } });
  const resultElement = screen.getByText(/olleh/i);
  expect(resultElement).toBeInTheDocument();
});

test('reverses string correctly on button click', () => {
  render(<App />);
  const inputElement = screen.getByLabelText(/Enter text/i);
  fireEvent.change(inputElement, { target: { value: 'world' } });
  const buttonElement = screen.getByText(/Reverse 🔄/i);
  fireEvent.click(buttonElement);
  const resultElement = screen.getByText(/dlrow/i);
  expect(resultElement).toBeInTheDocument();
});

test('copies reversed string to clipboard', async () => {
  render(<App />);
  const inputElement = screen.getByLabelText(/Enter text/i);
  fireEvent.change(inputElement, { target: { value: 'copy' } });
  const iconElement = screen.getByTitle(/Copy to clipboard/i);
  fireEvent.click(iconElement);

  const clipboardText = await navigator.clipboard.readText();
  expect(clipboardText).toBe('ypoc');
});
