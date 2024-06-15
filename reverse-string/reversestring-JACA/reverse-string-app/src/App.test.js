import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// Helper function to match text and icon
const getByTextAndIcon = (text, icon) => (content, element) => {
  const hasText = element => element.textContent === text;
  const elementHasText = hasText(element);
  const childrenDontHaveText = Array.from(element.children).every(
    child => !hasText(child)
  );

  const hasIcon = Array.from(element.querySelectorAll('span[role="img"]')).some(
    el => el.getAttribute('aria-label') === icon
  );

  return elementHasText && childrenDontHaveText && hasIcon;
};

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
  
  // Using the helper function to match text and icon
  const buttonElement = screen.getByRole('button', { name: getByTextAndIcon('Reverse', 'reverse') });
  fireEvent.click(buttonElement);
  const resultElement = screen.getByText(/dlrow/i);
  expect(resultElement).toBeInTheDocument();
});

test('copies reversed string to clipboard', async () => {
  render(<App />);
  const inputElement = screen.getByLabelText(/Enter text/i);
  fireEvent.change(inputElement, { target: { value: 'copy' } });
  
  const iconElement = screen.getByLabelText(/Copy to clipboard/i);
  fireEvent.click(iconElement);

  const clipboardText = await navigator.clipboard.readText();
  expect(clipboardText).toBe('ypoc');
});
