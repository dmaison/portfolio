import Page from "../../../components/Page";
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { MEDIA } from "./config";

const ClashOfTheTitans = () => {
    return (
        <Page title="Clash of the Titans">
            <Typography variant="subtitle">
                2019
            </Typography>
            <ImageList variant="masonry" cols={ 3 } gap={ 16 }>
                {
                    MEDIA.map(
                        ({ title, url, weight, width, video, subtitle }, index ) => {
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