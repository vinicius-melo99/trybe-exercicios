// App.test.js
import React from 'react';
import { findByText, render, screen } from '@testing-library/react';
import App from './App';

afterEach(() => jest.clearAllMocks());

it('fetches a joke', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  jest.spyOn(global, 'fetch');
  global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke)
  })
  render(<App />);

  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith(
    'https://icanhazdadjoke.com/',
    { headers: { Accept: 'application/json' } }
  );
  const text = await screen.findByText('Whiteboards ... are remarkable.');
  expect(text).toBeInTheDocument();
});