import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Search from './Search';
import { MemoryRouter } from 'react-router-dom';

describe('Search component', () => {

  afterEach(() => cleanup());
  it.only('renders Search', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
