import React, { useEffect } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { useArtist } from '../../context/artistContext'

const ArtistItem = ({ id, name }) => {
    const { setArtist } = useArtist()
    
    return (
        <Link to={`/artist/${id}`} onClick={() => setArtist(name)}> <div >{name}</div></Link>
    )

}

ArtistItem.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string

};

export default ArtistItem;

