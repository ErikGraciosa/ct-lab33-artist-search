import React from 'react';
import AlbumItem from './AlbumItem';
import PropTypes from 'prop-types';

function AlbumDisplay({ albums }) {
  return (
    <div>
      {albums.map(album => <AlbumItem key={album.id} {...album}/>)}
    </div>
  );
}

AlbumDisplay.propTypes = {
  albums: PropTypes.array
};

export default AlbumDisplay;
