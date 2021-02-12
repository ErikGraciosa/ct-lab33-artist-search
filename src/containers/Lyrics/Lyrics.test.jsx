import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router-dom';
import { ArtistProvider } from '../../context/artistContext';
import Lyrics from './Lyrics';
import songLyrics from '../../fixtures/lyrics.json';
import { ArtistContext } from '../../context/artistContext';

const server = setupServer(
  rest.get('https://api.lyrics.ovh/v1/U2/The%20Ocean', (req, res, ctx) => {
    return res(ctx.json(songLyrics));
  })
);

describe('Lyrics page functionality testing', () => {
  beforeAll(() => {
    server.listen();
  });
  afterAll(() => server.close());
  
  it('testing that the page displays fetched lyrics', async() => {
    render(
      <ArtistContext.Provider value={{
        artist: 'U2'
      }}>
        <MemoryRouter>
          <Lyrics match={{ params: { id: 'The%20Ocean' } }}/>
        </MemoryRouter>
      </ArtistContext.Provider>
    );

    return waitFor(() => {
      screen.findByText('Dorian');
    });
  });
});
