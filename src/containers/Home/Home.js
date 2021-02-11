import React, { useState, useEffect } from 'react';
import Search from '../../components/Search';
import { fetchArtists } from '../../services/artistFetch';
import ArtistDisplay from '../../components/Artist/ArtistDisplay';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [artists, setArtists] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {

    if(search != '') {
      setLoading(true);
      fetchArtists(search, offset).then((results) => setArtists(results));
      setLoading(false);
    }

  }, [search, offset]);

  return (
    <div>
      <Search setSearch={setSearch} />
      {(offset) != 0 
        ? <button onClick={() => setOffset(offset - 25)}>Last Page</button> 
        : <button disabled>Last Page</button>}
      {(search) === '' 
        ? <button disabled>Next Page</button>
        : <button onClick={() => setOffset(offset + 25)}>Next Page</button>}
      {loading ? <div>Loading</div> : <ArtistDisplay artists={artists} />}
    </div>
  );
}
