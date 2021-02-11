import React, { useState, useEffect } from 'react';
import Search from '../../components/Search';
import { fetchArtists } from '../services/artistFetch';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState(null);
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchArtists(search).then((results) => setArtists(results));
    setLoading(false);
  }, [search]);

  return (
    <div>
      <Search setSearch={setSearch} />
      {loading ? <div>Loading</div> : <display artists={artists} />}
    </div>
  );
}
