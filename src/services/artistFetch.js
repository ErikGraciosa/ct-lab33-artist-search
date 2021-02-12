export const fetchArtists = (artist, offset) => {
  return fetch(
    `https://musicbrainz.org/ws/2/artist?query=${artist}&fmt=json&limit=25&offset=${offset}` // eslint-disable-line
  )
    .then((res) => res.json())
    .then((json) => json.artists);

};
