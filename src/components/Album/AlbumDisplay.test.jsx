import React from 'react';
import { render, cleanup } from '@testing-library/react';
import AlbumDisplay from './AlbumDisplay';
import { MemoryRouter } from 'react-router-dom';

describe('AlbumDisplay component', () => {

  const albums = [{
    id: '1234'
  }];

  afterEach(() => cleanup());
  it.only('renders AlbumDisplay', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <AlbumDisplay albums={albums} />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
