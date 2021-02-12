import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
// import { rest } from 'msw';
// import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router-dom';
import { ArtistProvider } from '../../context/artistContext';
import Home from './Home';


describe('Home page functionality testing', () => {
 
  
  it('testing search input and button returns list of artists', async() => {
    render(
      <ArtistProvider>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </ArtistProvider>
    );

    const searchInput = screen.getByPlaceholderText('Search');
    const searchButton = screen.getByText('Search');

    fireEvent.input(searchInput, {
      target: {
        value: 'U2',
      },
    });

    fireEvent.submit(searchButton);

    const artistList = await screen.findByTestId('artist-list');

    return waitFor(() => {
      expect(artistList).toHaveTextContent('U2');
    });
  });
});
