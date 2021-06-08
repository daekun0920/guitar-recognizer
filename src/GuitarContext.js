import React, { useContext, useState } from 'react'

const GuitarProvider = React.createContext()
const GuitarImageContext = React.createContext()

export function useGuitar() {
    return useContext(GuitarProvider)
}
export function useGuitarImage() {
    return useContext(GuitarImageContext)
}


export default function GuitarContext({ children }) {
    const [imageURL, setImageURL] = useState('');
    const [guitarKind, setGuitarKind] = useState('Default');
    
    const changeGuitar = (val) => {
        setGuitarKind(val)
    }

    const changeImage = (val) => {
        setImageURL(val)
    }

    return (
        <GuitarProvider.Provider value={{guitarKind: guitarKind, changeGuitar: changeGuitar}}>
            <GuitarImageContext.Provider value={{imageURL: imageURL, changeImage: changeImage}}>
                {children}
            </GuitarImageContext.Provider>    
        </GuitarProvider.Provider>
    )
}


