import { render, screen } from '@testing-library/react';
import App from './App';

test('Testa se há um input do tipo email na tela', () => {
  render(<App />);
  const inputEmail = screen.getByLabelText('Email');
  
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveProperty('type', 'email');
});

test('Testa se há um botão na tela', () => {
  render(<App />);

  const buttons = screen.getAllByRole('button');
  const sendButton = screen.getByTestId('id-send');

  expect(buttons).toHaveLength(2);
  expect(sendButton).toBeInTheDocument();  
  expect(sendButton).toHaveProperty('type', 'button');
  expect(sendButton).toHaveValue('Enviar');
});