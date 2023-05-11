import Skeleton from "@mui/material/Skeleton";
import { useState, useEffect } from "react";

const LazyImage = props => {

    const [ loading, setLoading ] = useState( true ),
    { src, height, width } = props;

    useEffect(() => {
        const preload = new Image();
        preload.src = src;
        preload.onload = () => {
            setLoading( false );
        }
        return () => {
            setLoading( false );
        }
    }, [ src, setLoading ]);

    return loading ? 
        (
            <Skeleton height={ height } width={ width } />
        ) : 
        (
            <img 
                { ...props} 
                style={{
                    height: 'auto',
                    maxWidth: width,
                    width: '100%'
                }} />
        )
}

export default LazyImage;