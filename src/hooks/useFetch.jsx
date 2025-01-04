import { useEffect, useState } from "react";
import api from "../api/blogPosts";

const useFetch = (initialUrl) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const obtainData = async () => {
            try {
                const response = await api.get(initialUrl);
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        obtainData();
    }, [initialUrl]); 

    return data;
};

export default useFetch;
