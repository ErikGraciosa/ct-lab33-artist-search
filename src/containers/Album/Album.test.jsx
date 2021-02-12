import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router-dom';
import { ArtistProvider } from '../../context/artistContext';
import Album from './Album';
import songList from '../../fixtures/songList.json';


const server = setupServer(
  rest.get('http://musicbrainz.org/ws/2/recording?release=24385f92-4dd1-4726-8719-437d1c74ac18&fmt=json', (req, res, ctx) => {
    return res(ctx.json(songList));
  })
);

describe('Album page functionality testing', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  
  it('testing that the page displays fetched songs', async() => {
    render(
      <ArtistProvider>
        <MemoryRouter>
          <Album match={{ params: { id: '24385f92-4dd1-4726-8719-437d1c74ac18' }}}/>
        </MemoryRouter>
      </ArtistProvider>
    );

    return waitFor(() => {
      screen.getByText('The Ocean');
    });
  });
});
