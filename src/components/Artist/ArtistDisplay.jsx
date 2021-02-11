import React from 'react'
import ArtistItem from './ArtistItem'

const ArtistDisplay = ({ artists }) => {


    return (
        <ul>
            {artists.map(artist => (
                <li key={artist.id}>
                    <ArtistItem {...artist} />
                </li>
            ))}

        </ul>
    )
}
export default ArtistDisplay;
