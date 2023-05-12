import Page from "../../../components/Page";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { HISTORY } from "./config";
import { styled } from '@mui/material/styles';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import SvgIcon from '@mui/material/SvgIcon';
import { useState } from "react";

const Experience = () => {


    return (
        <Page title="Experience">
            <Typography sx={{ mb: 3 }}>
                A high-level overview of my professional career
            </Typography>
            {
                HISTORY.map(
                    ( epoch, index ) => {
                        const { company, image, positions } = epoch;
                        return (
                            <Accordion key={ company } defaultExpanded={ ( index === 0 ) }>
                                <AccordionSummary
                                    expandIcon={ <ExpandMoreIcon /> }
                                    aria-controls="panel1a-content"
                                    id="panel1a-header" >
                                    <Stack direction="row" alignItems="center" spacing={ 2 }>
                                        <SvgIcon component={ image } inheritViewBox color="primary" sx={{ fontSize: 40 }} />
                                        <Typography>{ company }</Typography>
                                    </Stack>
                                </AccordionSummary>
                                <AccordionDetails>
                                    {
                                        positions.map(
                                            position => {
                                                const { description, title, years } = position,
                                                { start, end } = years,
                                                yearCount = !!end ? ( end - start ) : null;
                                                return (
                                                    <Card key={ title } elevation={ 4 } sx={{ mb: 2 }}>
                                                        <CardHeader
                                                            subheader={ yearCount ? `${ yearCount } Year${ yearCount > 1 ? 's' : '' }` : 'Current Role' }
                                                            title={ title } />
                                                        <CardContent>
                                                            { description }
                                                        </CardContent>
                                                    </Card>
                                                )
                                            }
                                        )
                                    }
                                </AccordionDetails>
                            </Accordion>
                        )
                    }
                )
            }
            
        </Page>
    )

}

export default Experience;