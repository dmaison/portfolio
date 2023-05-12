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
import { useState } from "react";

const ClashOfTheTitans = () => {

    const [ group, setGroup ] = useState( 0 );

    const setActiveGroup = ( e, id ) => {
        setGroup( id );
    }


    return (
        <Page title="Album">

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
            <ImageList variant="masonry" cols={ 3 } gap={ 16 }>
                {
                    MEDIA.map(
                        ({ groupId, title, url, weight, width, video, subtitle }, index ) => {

                            // filter the active tab if its not all images
                            if( group > 0 && groupId !== group ) return null;

                            return (
                                <ImageListItem key={ `event-${ index }` }>
                                    <img 
                                        alt={ title }
                                        src={ url } 
                                        srcSet={ url }
                                        width={ width } 
                                        loading="lazy" />
                                    <ImageListItemBar
                                        actionIcon={
                                            <IconButton>
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
        </Page>
    )
}

export default ClashOfTheTitans;