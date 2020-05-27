import React from 'react';
import renderWithRouter from '../renderWithRouter';
import About from '../components/About';

describe('Tests "About.js" file...', () => {
  test('Renders the "About Pokédex" page and tests its contents.', () => {
    const { getByText } = renderWithRouter(<About />);
    const aboutPage = getByText('About Pokédex');

    expect(aboutPage).toBeInTheDocument();
    expect(aboutPage.tagName).toBe('H2');
  });

  test('Tests if "About Pokédex" page has 2 `p` tags in it.', () => {
    const { container } = renderWithRouter(<About />);
    const pTag = container.querySelectorAll('p');

    expect(pTag.length).toBe(2);
  });

  test('Tests if "About Pokédex" page has a rendered img tag', () => {
    const { container } = renderWithRouter(<About />);
    const img = container.querySelector('IMG');

    expect(img).toBeInTheDocument();
    expect(img.src).toBe(
      'https://cdn.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png'
    );
  });
});
