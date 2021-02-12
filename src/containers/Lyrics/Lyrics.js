import React, { useState, useEffect } from 'react'
import { fetchLyrics } from '../../services/lyricsFetch'
import { useArtist } from '../../context/artistContext'


export default function Lyrics({ match }) {
    const { artist } = useArtist()
    const [lyrics, setLyrics] = useState({});
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetchLyrics(artist, match.params.id)
            .then((res) => {
                console.log(res)
                setLyrics(res);
                setLoading(false);

            })
    }, [])
    return (
        <div>
            {lyrics.lyrics}
        </div>
    )
}
