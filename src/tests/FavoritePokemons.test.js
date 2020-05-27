import React from 'react';
import { Router } from 'react-router-dom';
import { cleanup, render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
// import { getByAltText } from '@testing-library/jest-dom/extend-expect';
import FavoritePokemons from '../components/FavoritePokemons';

afterEach(cleanup);

function renderWithRouter(
  ui,
  { route = '/about', history = createMemoryHistory({ initialEntries: [route] }) } = {},
) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    history,
  };
}

test('Testing Favorite Pokemon Page', () => {
  const { getByText } = renderWithRouter(<FavoritePokemons pokemons={[]} />);
  const emptly = getByText(/No favorite pokemon found/i);
  expect(emptly).toBeInTheDocument();
});
