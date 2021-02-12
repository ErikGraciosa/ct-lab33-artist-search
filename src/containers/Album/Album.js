import React, { useEffect, useState } from 'react';
import { findSongs } from '../../services/songsFetch';
// import { Link } from 'react-router-dom';

export default function Album({ match }) {
    const [loading, setLoading] = useState(true);
    const [songs, setSongs] = useState([]);

    // useEffect(() => {
    //     findSongs(match.params.id).then((res) => {
    //         setSongs((res) =>
    //             setLoading(false);
    //         console.log(songs)
    //     });

    // }, []);
    useEffect(() => {

        findSongs(match.params.id)
            .then((res) => {
                setSongs(res);
                setLoading(false);

            });

    }, []);
    console.log('songs', songs)
    return (
        <div>
            <ul>
                {songs.map((song) => {
                    return (
                        <li key={song.id}>
                            <div>{song.title}</div>

                        </li>)
                })}
            </ul>
        </div>
    );
}
