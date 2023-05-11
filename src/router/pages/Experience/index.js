import Page from "../../../components/Page";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import ButtonBase from '@mui/material/ButtonBase';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import { HISTORY } from "./config";
import { styled } from '@mui/material/styles';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import SvgIcon from '@mui/material/SvgIcon';
import { useState } from "react";

const LogoButton = styled( ButtonBase )`
    font-size: 6rem;
    padding: 1rem;
`;

const Experience = () => {

    const [ activeEpoch, setActiveEpoch ] = useState( HISTORY[ 0 ] ),
    { company, positions, url } = activeEpoch;

    const showHistory = epoch => () => {
        setActiveEpoch( epoch );
    }

    return (
        <Page title="Experience">
            <Grid container spacing={ 3 }>
                <Grid item md={ 5 }>
                    <ImageList>
                        {
                            HISTORY.map(
                                epoch => {
                                    const { company, image } = epoch
                                    return (
                                        <ImageListItem key={ `history-${ company }` }>
                                            <LogoButton onClick={ showHistory( epoch ) }>
                                                <SvgIcon component={ image } inheritViewBox fontSize="inherit" color="primary" />
                                            </LogoButton>
                                        </ImageListItem>
                                    )
                                }
                            )
                        }
                    </ImageList>
                </Grid>
                <Grid item md={ 7 }>
                    <Paper elevation={ 8 } sx={{ padding: 2 }}>
                        <Typography variant="h4" component="h3" sx={{ mb: 3 }}>
                            { company }
                        </Typography>
                        <Stack spacing={ 3 }>
                            {
                                positions.map(
                                    position => {
                                        const { description, title, years } = position,
                                        { start, end } = years;
                                        return (
                                            <Card>
                                                <CardHeader
                                                    subheader={ !!end ? `${ ( end - start ) } Year(s)` : 'Current Role' }
                                                    title={ title } />
                                                <CardContent>
                                                    { description }
                                                </CardContent>
                                            </Card>
                                        )
                                    }
                                )
                            }
                        </Stack>
                    </Paper>
                </Grid>
            </Grid>
            
        </Page>
    )

}

export default Experience;