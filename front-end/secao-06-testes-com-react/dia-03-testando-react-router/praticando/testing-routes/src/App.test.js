import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import { act } from 'react-dom/test-utils';

test('deve renderizar o componente App', () => {
  renderWithRouter(<App />);

  const homeTitle = screen.getByRole('heading', { name: 'Você está na página Início' });

  expect(homeTitle).toBeInTheDocument();
});

test('deve renderizar o componente Sobre ao clicar no link', () => {
  const { history } = renderWithRouter(<App />);

  const aboutTitle = screen.getByRole('link', { name: 'Sobre' });
  expect(aboutTitle).toBeInTheDocument();
  userEvent.click(aboutTitle);

  const { location: { pathname } } = history;
  expect(pathname).toBe('/about');

  const pageTitle = screen.getByText('Você está na página Sobre');
  expect(pageTitle).toBeInTheDocument();

});

test('deve renderizar a página "not found" ao digitar uma url que não existe', () => {
  const { history } = renderWithRouter(<App />);

  act(() => {
    history.push('/pagina/inexistente');
  })

  const pageTitle = screen.getByRole('heading', { name: 'Página não encontrada' });
  expect(pageTitle).toBeInTheDocument();
});