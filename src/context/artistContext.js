import React, { createContext, useState, useContext } from 'react';

export const ArtistContext = createContext(null)

export const ArtistProvider = ({ children }) => {
    const [artist, setArtist] = useState('')
    return (
        <ArtistContext.Provider value={{ artist, setArtist }}>
            {children}
        </ ArtistContext.Provider>
    )
}

export const useArtist = () => {
    const { artist } = useContext(ArtistContext)
    const { setArtist } = useContext(ArtistContext)
    return {
        artist,
        setArtist
    }
}
