import PropTypes from 'prop-types';
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
                    height: width ? 'auto' : height,
                    maxWidth: width,
                    width: width ? '100%' : 'auto'
                }} />
        )
}

LazyImage.propTypes = {
    alt: PropTypes.string.isRequired, 
    src: PropTypes.string.isRequired, 
    height: PropTypes.number, 
    width: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ])
}

export default LazyImage;