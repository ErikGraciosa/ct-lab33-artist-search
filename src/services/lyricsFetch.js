export const fetchLyrics = (artist, title) => {
    return fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`) // eslint-disable-line
        .then((res) => res.json());

};
