import { createContext, useState } from "react";

const Trackcontext = createContext([])

export const TrackProvider = ({ children }) => {
    const [track, setTrack] = useState([]);
    

    
    return (
        <Trackcontext.Provider value={{track, setTrack}}>
            {children}
        </Trackcontext.Provider>
    )
}

export default Trackcontext;