import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const ArtistItem = ({ id, name }) => {


    return (
        <Link to={`/artist/${id}/${name}`}> <div>{name}</div></Link>
    )

}
ArtistItem.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string

};

export default ArtistItem;

