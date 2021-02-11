import React, { useEffect, useState } from 'react';
import { findSongs } from '../../services/songsFetch';
import { Link } from 'react-router-dom';

export default function Album({ match }) {
  const [loading, setLoading] = useState(true);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    findSongs(match.params.id).then((res) => {
      setSongs(res);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <ul>
        {loading ? (
          <div>Loading </div>
        ) : (
          songs.map((song) => {
            <li>
              <Link to={`/song/${song.title}/${match.params.artist}`}>
                <div>{song.title}</div>
              </Link>
            </li>;
          })
        )}
      </ul>
    </div>
  );
}
