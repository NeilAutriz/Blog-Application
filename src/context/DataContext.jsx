import { createContext } from "react";
import { useState } from 'react';
import useWindowSize from '../hooks/useWindowSize';
import useFetch from '../hooks/useFetch';
import { useEffect } from 'react';


const DataContext = createContext({})

export const DataProvider = ({children}) => {
    const dataUrl = 'http://localhost:3500/posts';
    const fetchedData = useFetch(dataUrl);
    const [posts, setPosts] = useState([]);
    const { width } = useWindowSize();

    // Sync posts state with fetched data
    useEffect(() => {
        setPosts(fetchedData);
    }, [fetchedData]);

    return(
        <DataContext.Provider value={{
            posts, setPosts, width, dataUrl, fetchedData
        }}>
            {children}
        </DataContext.Provider>
    )
}


export default DataContext;