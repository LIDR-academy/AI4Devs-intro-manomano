import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// Helper function to match text and icon within the button
const getByTextAndIcon = (text, icon) => {
  return (content, element) => {
    const hasText = element => element.textContent.includes(text);
    const hasIcon = Array.from(element.querySelectorAll('span[role="img"]')).some(
      el => el.getAttribute('aria-label') === icon
    );

    return hasText(element) && hasIcon;
  };
};

test('renders Reverse String title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Reverse String/i);
  expect(linkElement).toBeInTheDocument();
});

test('reverses string correctly on input change', () => {
  render(<App />);
  const inputElement = screen.getByLabelText(/Reverse a string/i);
  fireEvent.change(inputElement, { target: { value: 'hello' } });
  const resultElement = screen.getByText(/olleh/i);
  expect(resultElement).toBeInTheDocument();
});

test('reverses string correctly on button click', () => {
  render(<App />);
  const inputElement = screen.getByLabelText(/Reverse a string/i);
  fireEvent.change(inputElement, { target: { value: 'world' } });
  
  // Matching the button by role and partial text
  const buttonElement = screen.getByRole('button', { name: /Reverse/i });
  fireEvent.click(buttonElement);
  const resultElement = screen.getByText(/dlrow/i);
  expect(resultElement).toBeInTheDocument();
});

test('copies reversed string to clipboard', async () => {
  // Mock the clipboard API
  Object.assign(navigator, {
    clipboard: {
      writeText: jest.fn().mockImplementation(() => Promise.resolve()),
    },
  });

  render(<App />);
  const inputElement = screen.getByLabelText(/Reverse a string/i);
  fireEvent.change(inputElement, { target: { value: 'copy' } });
  
  const iconElement = screen.getByLabelText(/Copy to clipboard/i);
  fireEvent.click(iconElement);

  expect(navigator.clipboard.writeText).toHaveBeenCalledWith('ypoc');
});
