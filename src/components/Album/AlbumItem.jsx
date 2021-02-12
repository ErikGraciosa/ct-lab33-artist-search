import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function AlbumItem({ id, title, date }) {
  const addDefaultSource = (ev) => {
    ev.target.src = 'https://www.placecage.com/200/300';
  };

  return (
    <div>
      <Link to={`/album/${id}`}>
        <figure>
          <img
            onError={addDefaultSource}
            src={`http://coverartarchive.org/release/${id}/front`}
            alt="picture" />
          <figcaption>{title}</figcaption>
          <figcaption>{date}</figcaption>
        </figure>
      </Link>
    </div>
  );
}

AlbumItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string
};

export default AlbumItem;
