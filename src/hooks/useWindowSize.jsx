import { useEffect, useState } from "react";

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: null,
        height: null
    });

    useEffect(() => {
        const updatedWindow = () => {
            const newSize = {
                width: window.innerWidth,
                height: window.innerHeight
            }
            setWindowSize(newSize);
        }

        window.addEventListener('resize', updatedWindow);

    }, [])

    return windowSize;
}



export default useWindowSize;