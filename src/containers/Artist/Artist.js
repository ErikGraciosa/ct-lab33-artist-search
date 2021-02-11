import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AlbumDisplay from '../../components/Album/AlbumDisplay';
import { fetchAlbum } from '../../services/fetchAlbum';

export default function Artist({ match }) {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    
    fetchAlbum(match.params.id)
      .then((results) => {
        setAlbums(results);
        setLoading(false);
      });
    
  }, []);

  return (
    <div>
      <h1>rendered</h1>
      {loading ? <div>Still loading</div> : <AlbumDisplay albums={albums}/>}
    </div>
  );
}

Artist.propTypes = {
  match: PropTypes.obj
};
