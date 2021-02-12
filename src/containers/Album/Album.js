import React, { useEffect, useState } from 'react';
import { findSongs } from '../../services/songsFetch';
import { Link } from 'react-router-dom';
import { useArtist } from '../../context/artistContext'
export default function Album({ match }) {
    const [loading, setLoading] = useState(true);
    const [songs, setSongs] = useState([]);
    const { artist } = useArtist()
    
    useEffect(() => {

        findSongs(match.params.id)
            .then((res) => {
                setSongs(res);
                setLoading(false);

            });

    }, []);
    
    return (
        <div>
            <ul>
                {songs.map((song) => {
                    return (
                        <Link to={`/songs/${song.title}`}>  <li key={song.id}>
                            <div>{song.title}</div>

                        </li>
                        </Link>)
                })}
            </ul>
        </div>
    );
}
