export const fetchArtists = (artist) => {
  return fetch(
    `http://musicbrainz.org/ws/2/artist?query=${artist}&fmt=json&limit=25`
  )
    .then((res) => res.json())
    .then((json) => json.artists);
};
