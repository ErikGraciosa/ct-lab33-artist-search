import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router-dom';
import { ArtistProvider } from '../../context/artistContext';
import Artist from './Artist';
import albumList from '../../fixtures/albumList.json';


const server = setupServer(
  rest.get('http://musicbrainz.org/ws/2/release?artist=a3cb23fc-acd3-4ce0-8f36-1e5aa6a18432&fmt=json', (req, res, ctx) => {
    return res(ctx.json(albumList));
  })
);

describe('Artist page functionality testing', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  
  it('testing that the page displays fetched albums', async() => {
    render(
      <ArtistProvider>
        <MemoryRouter>
          <Artist match={{ params: { id: 'a3cb23fc-acd3-4ce0-8f36-1e5aa6a18432' }}}/>
        </MemoryRouter>
      </ArtistProvider>
    );

    return waitFor(() => {
      screen.findByAltText('picture');
    });
  });
});
