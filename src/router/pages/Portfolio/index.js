import Page from "../../../components/Page";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { PIECES } from "./config";
import LazyImage from '../../../components/LazyImage';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SvgIcon from '@mui/material/SvgIcon';
import GitHubIcon from '@mui/icons-material/GitHub';
import useMediaQuery from '@mui/material/useMediaQuery';
import Masonry from "react-responsive-masonry"

const Experience = () => {

    const isMobile = useMediaQuery( theme => theme.breakpoints.down( 'md' ) );

    return (
        <Page title="Portfolio">
            <Typography sx={{ mb: 3 }}>
                A notable list of things I have made in recent history that I'm allowed to talk about
            </Typography>
            <Masonry columnsCount={ !isMobile ? 3 : 1 } gutter="2rem">
                {
                    PIECES.map(
                        piece => {
                            const { description, featuredTechnologies, github, image, name, owner, url } = piece;
                            return (
                                <Card sx={{ maxWidth: 400 }} key={ name }>
                                    <CardHeader
                                        subheader={ owner }
                                        title={ name } />
                                    <CardMedia sx={{ maxHeight: 200, overflow: 'hidden' }}>
                                        <LazyImage src={ image } width="100%" alt={ `Screenshot of ${ name }` }  />
                                    </CardMedia>
                                    <CardContent>
                                        <Typography sx={{ mb: 2 }}><span dangerouslySetInnerHTML={{ __html: description }} /></Typography>
                                        <Typography variant="caption">Featured Technologies</Typography>
                                        <List>
                                            {
                                                featuredTechnologies.map(
                                                    ({ label, icon }) => (
                                                        <ListItem disablePadding key={ label }>
                                                            <ListItemIcon>
                                                                <SvgIcon component={ icon } inheritViewBox color="primary" />
                                                            </ListItemIcon>
                                                            <ListItemText primary={ label } />
                                                        </ListItem>
                                                    )
                                                )
                                            }
                                        </List>
                                    </CardContent>
                                    
                                    <CardActions>
                                        {
                                            url ?
                                                <Button href={ url } startIcon={ <OpenInNewIcon /> } variant="text" target="_blank">
                                                    Launch
                                                </Button> :
                                                null
                                        }
                                        { 
                                            github ?
                                                <Button startIcon={ <GitHubIcon /> } href={ github } target="_blank">
                                                    View it on GitHub
                                                </Button> :
                                                null
                                        }
                                    </CardActions>
                                </Card>
                            )
                        }
                    )
                }
                
            </Masonry>
        </Page>
    )

}

export default Experience;