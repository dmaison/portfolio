import Page from "../../../components/Page";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { PIECES } from "./config";
import LazyImage from '../../../components/LazyImage';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SvgIcon from '@mui/material/SvgIcon';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useState } from "react";

const Experience = () => {


    return (
        <Page title="Portfolio">
            <Typography sx={{ mb: 3 }}>
                A Notable list of things I have made in recent history
            </Typography>
            <Grid container spacing={ 2 } columns={ 3 }>
                {
                    PIECES.map(
                        piece => {
                            const { description, featuredTechnologies, github, image, name, owner, url } = piece;
                            return (
                                <Grid item key={ name } md={ 1 } xs={ 3 }>
                                    <Card>
                                        <CardHeader
                                            subheader={ owner }
                                            title={ name } />
                                        <CardMedia sx={{ textAlign: 'center', maxHeight: 200, overflow: 'hidden' }}>
                                            <LazyImage src={ image } height={ 200 } alt={ `Screenshot of ${ name }` } />
                                        </CardMedia>
                                        <CardContent>
                                            <Typography sx={{ mb: 2 }}><span dangerouslySetInnerHTML={{ __html: description }} /></Typography>
                                            <Typography variant="caption">Featured Technologies</Typography>
                                            <List>
                                                {
                                                    featuredTechnologies.map(
                                                        ({ label, icon }) => (
                                                            <ListItem disablePadding>
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
                                </Grid>
                            )
                        }
                    )
                }
                
            </Grid>
        </Page>
    )

}

export default Experience;