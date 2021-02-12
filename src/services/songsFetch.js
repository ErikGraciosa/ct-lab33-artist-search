export const findSongs = (albumId) => {
  return fetch(`https://musicbrainz.org/ws/2/recording?release=${albumId}&fmt=json
  `)
    .then((res) => res.json())
    .then((json) => json.recordings);
};
