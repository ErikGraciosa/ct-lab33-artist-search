export const fetchAlbum = (artistId) => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json`) // eslint-disable-line
    .then((res) => res.json())
    .then((json) => json.releases);
};
