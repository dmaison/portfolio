import Page from "../../../components/Page";
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import IconButton from '@mui/material/IconButton';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { GROUPS, MEDIA } from "./config";
import { useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import LazyImage from "../../../components/LazyImage";

const Album = () => {

    const location = useLocation(),
    defaultGroup = useMemo(() => {
        const qs = new URLSearchParams( location?.search ),
        group = qs.get( 'group' ) || 0;
        return parseInt( group );
    }, [ location ]),
    [ group, setGroup ] = useState( defaultGroup ),
    [ media, setMedia ] = useState( null ),
    open = Boolean( media );

    /**
     * Sets the active group
     * @param {EventListenerObject} e 
     * @param {number} id 
     */
    const setActiveGroup = ( e, id ) => {
        setGroup( id );
    }

    /**
     * Shows the content larger in a modal
     * @param {string} media 
     * @param {boolean} video 
     * @returns {function}
     */
    const toggleMedia = ( src=null, video=false, title ) => () => {
        if( src ){
            setMedia({ src, video, title });
        } else {
            setMedia( null );
        }
    }

    return (
        <Page title="Album">
            <Typography>
                This is really only here to have more content on the site.
            </Typography>

            <Tabs value={ group } onChange={ setActiveGroup } aria-label="album selection">
                <Tab label="All" id={ 0 } />
                {
                    GROUPS.map(
                        ({ title, id }) => (
                            <Tab label={ title } key={ id } id={ id } />
                        )
                    )
                }
            </Tabs>
            <ImageList variant="masonry" cols={ 3 } gap={ 32 }>
                {
                    MEDIA.map(
                        ({ groupId, title, url, weight, width, video, subtitle }, index ) => {

                            // filter the active tab if its not all images
                            if( group > 0 && groupId !== group ) return null;

                            return (
                                <ImageListItem key={ `event-${ index }` }>
                                    <LazyImage 
                                        alt={ title }
                                        src={ url } 
                                        width="100%" 
                                        loading="lazy" />
                                    <ImageListItemBar
                                        actionIcon={
                                            <IconButton onClick={ toggleMedia( url, video, title ) }>
                                                {
                                                    video ? 
                                                        <PlayArrowIcon /> :
                                                        <ZoomInIcon />
                                                }
                                            </IconButton>
                                        }
                                        actionPosition="left"
                                        title={ title }
                                        subtitle={ <span>{ [ ( weight ? `${ weight } lbs` : null ), subtitle ].join( ' ' ) }</span> }
                                        position="bottom" />
                                </ImageListItem>
                            )
                        }
                    )
                }
            </ImageList>
            <Dialog
                open={open}
                onClose={ toggleMedia() }
                aria-labelledby="media-title"
                aria-describedby="media-content">
                <DialogTitle id="media-title">
                    { media?.title }
                </DialogTitle>
                <DialogContent id="media-content">
                    {
                        media?.video ?
                            <video controls width="100%" style={{ maxHeight: '50vh' }} >
                                <source src={ media?.video } type="video/mp4" />
                            </video> :
                            <LazyImage src={ media?.src } alt={ media?.title } width="100%" />
                    }
                </DialogContent>
                <DialogActions>
                    <Button onClick={ toggleMedia() }>Close</Button>
                </DialogActions>
            </Dialog>
        </Page>
    )
}

export default Album;