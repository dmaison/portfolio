import Page from "../../../components/Page";
import Typography from "@mui/material/Typography";
import SvgIcon from '@mui/material/SvgIcon';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { ReactComponent as HtmlIcon } from './media/html.svg';
import { ReactComponent as CssIcon } from './media/css.svg';
import { ReactComponent as JavascriptIcon } from './media/js.svg';
import { ReactComponent as SolidityIcon } from './media/solidity.svg';
import { ReactComponent as UbuntuIcon } from './media/ubuntu.svg';
import { ReactComponent as AWSIcon } from './media/aws.svg';
import StorageIcon from '@mui/icons-material/Storage';
import Me from "./media/me.jpg";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import HandymanIcon from '@mui/icons-material/Handyman';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import SendIcon from '@mui/icons-material/Send';
import PersonIcon from '@mui/icons-material/Person';
import { CURRENT_AGE, EXPERIENCE_TOTAL_YEARS, HREF_BANDCAMP, HREF_RESUME } from "./config";
import LazyImage from "../../../components/LazyImage";
import { styled } from '@mui/material/styles';

const Para = styled( Typography )`
    margin-bottom: 1rem
`

const About = () => {
    return (
        <Page title="About">
            <Para>
                I am a { CURRENT_AGE } year old Full-stack developer with over { EXPERIENCE_TOTAL_YEARS } years of professional experience, a veteran of the 
                United States Air Force, Husband, and Father.
            </Para>
            <Para>
                After graduating from a vacational highschool with a focused study on internet technologies, I immediately began my professional career. However, 
                during the recession in 2009, I made the decision to serve the country and joined the United States Air Force assuming the career field my father occupied while he served, Fuels &amp; Cryogentics Specialist  (2F0X1).
            </Para>
            <Para>
                While in active duty, I continued to hone my development skills as a free-lance developer, until I left active duty in 2014 and switched to reserve duty. During that time, I resumed the full-time profession
                of a full stack developer. I was honorably discharged from service in 2018 after I met my, soon-to-be wife Mallory.
            </Para>
            <Para>
                2 years later, Mallory and I were married, and shortly after became the proud parents of a baby boy named, Tyr.
            </Para>
            <Typography variant="h3">
                Featured Proficiencies
            </Typography>
            <List sx={{ columns: { md: 2, xs: 1 } }}>
                <ListItem>
                    <ListItemIcon>
                        <SvgIcon component={ HtmlIcon } inheritViewBox color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="HTML" secondary="HTML5, XHTML, XML, the whole gang" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <SvgIcon component={ CssIcon } inheritViewBox color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="CSS" secondary="CSS3, LESS, SASS" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <SvgIcon component={ JavascriptIcon } inheritViewBox color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Javascript" secondary="ECMAScript, ReactJS, AngularJS, NodeJS"  />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <SvgIcon component={ SolidityIcon } inheritViewBox color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Solidity" secondary="ERC20, ERC721, Hardhat, Web3" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <SvgIcon component={ UbuntuIcon } inheritViewBox color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Ubuntu" secondary="CLI (bash, vim, nano, etc.)"  />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <SvgIcon component={ AWSIcon } inheritViewBox color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Amazon Web Services " secondary="EC2, S3, Route53, Lambda, CloudFront..."  />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <StorageIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Database Architecture" secondary="SQL, MongoDB, Redis"  />
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component={ Link } href={ HREF_RESUME } target="_blank" aria-label="Résumé">
                        <ListItemIcon>
                            <OpenInNewIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="Résumé" secondary="Click here for the full list" />
                    </ListItemButton>
                </ListItem>
            </List>

            <Typography variant="h3" sx={{ mb: 2 }}>
                Contact
            </Typography>
            <Grid container>
                <Grid item md={ 6 } xs={ 12 }>
                    <LazyImage 
                        alt="A wonderful and totally non-aggressive photo of me."
                        height={ 384 }
                        width={ 400 }
                        src={ Me } />
                </Grid>
                <Grid item md={ 6 } xs={ 12 }>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <PersonIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText primary="David J. Maison Jr." secondary="Sr. UI Architect, Analog Devices, Inc." />
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component={ Link } href="tel:1-978-436-0982">
                                <ListItemIcon>
                                    <PhoneIphoneIcon color="primary" />
                                </ListItemIcon>
                                <ListItemText primary="Phone" secondary="(978) 436-0982" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component={ Link } href="mailto:davemaison@gmail.com">
                                <ListItemIcon>
                                    <SendIcon color="primary" />
                                </ListItemIcon>
                                <ListItemText primary="E-mail" secondary="davemaison@gmail.com" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
            <Typography variant="h3">
                Interests
            </Typography>

            <Stack direction="row">
                <List 
                    subheader={
                        <ListSubheader>Strongman Competitions</ListSubheader>
                    }>
                    <ListItem>
                        <ListItemIcon>
                            <EmojiEventsIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="Clash of the Titans II" secondary="1st place - u230 Division (2019)" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <FitnessCenterIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="New England Intro to Strongman" secondary="5th place - u230 Division (2017)" />
                    </ListItem>
                </List>

                <List 
                    subheader={
                        <ListSubheader>Hobbies</ListSubheader>
                    }>
                    <ListItem disablePadding>
                        <ListItemButton component={ Link } href={ HREF_BANDCAMP } target="_blank">
                            <ListItemIcon>
                                <OpenInNewIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText primary="Bandcamp" secondary="Melodic & Technical Deathmetal" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <MenuBookIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="Etymology & Language" secondary="1% of the way to becomming a polyglot" />
                    </ListItem>
                </List>

                <List 
                    subheader={
                        <ListSubheader>Domestic Things</ListSubheader>
                    }>
                    <ListItem>
                        <ListItemIcon>
                            <HandymanIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="Home Improvement" secondary="Depending on who you ask" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <LocalFloristIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="Growing Food" secondary="I also raise chickens" />
                    </ListItem>
                </List>
            </Stack>
            
        </Page>
    )
}

export default About;