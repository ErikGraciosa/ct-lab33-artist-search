import React, { useState, useEffect } from 'react';
import Search from '../../components/Search';
import { fetchArtists } from '../../services/artistFetch';
import ArtistDisplay from '../../components/Artist/ArtistDisplay'

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [artists, setArtists] = useState([]);

  useEffect(() => {

    if (search != '') {
      setLoading(true);
      fetchArtists(search).then((results) => setArtists(results));
      setLoading(false);
    }

  }, [search]);

  return (
    <div>
      <Search setSearch={setSearch} />
      {loading ? <div>Loading</div> : <ArtistDisplay artists={artists} />}
    </div>
  );
}
