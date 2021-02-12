import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ArtistDisplay from './ArtistDisplay';
import { MemoryRouter } from 'react-router-dom';
import { ArtistProvider } from '../../context/artistContext';

describe('ArtistDisplay component', () => {

  const artists = [{
    id: '1234'
  }];

  afterEach(() => cleanup());
  it.only('renders ArtistDisplay', () => {
    const { asFragment } = render(
      <ArtistProvider>
        <MemoryRouter>
          <ArtistDisplay artists={artists} {...artists} />
        </MemoryRouter>
      </ArtistProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
