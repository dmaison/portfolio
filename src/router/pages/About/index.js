import Page from "../../../components/Page";
import Typography from "@mui/material/Typography";
import SvgIcon from '@mui/material/SvgIcon';
import Stack from '@mui/material/Stack';
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
import { ReactComponent as ReactIcon } from './media/react.svg';
import { ReactComponent as AngularIcon } from './media/angular.svg';
import { ReactComponent as NodeIcon } from './media/node.svg';
import { ReactComponent as MongoIcon } from './media/mongo.svg';
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

const About = () => {
    return (
        <Page title="About">
            <Typography>
                I am a { CURRENT_AGE } year old Full-stack developer with over { EXPERIENCE_TOTAL_YEARS } years of professional experience, a veteran of the 
                United States Air Force, Husband, and Father.
            </Typography>
            <Typography>
                After graduating from a vacational highschool with a focused study on internet technologies, I immediately began my professional career. However, 
                during the recession in 2009, I made the decision to serve the country and joined the United States Air Force assuming the career field my father occupied while he served, Fuels &amp; Cryogentics Specialist  (2F0X1).
            </Typography>
            <Typography>
                While in active duty, I continued to hone my development skills as a free-lance developer, until I left active duty in 2014 and switched to reserve duty. During that time, I resumed the full-time profession
                of a full stack developer. I was honorably discharged from service in 2018 after I met my, soon-to-be wife Mallory.
            </Typography>
            <Typography>
                2 years later, Mallory and I were married, and shortly after became the proud parents of a baby boy named, Tyr.
            </Typography>
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
                    <ListItemText primary="CSS" secondary="CSS3" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <SvgIcon component={ JavascriptIcon } inheritViewBox color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Javascript" secondary="ES2016/V8"  />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                    <SvgIcon component={ ReactIcon } inheritViewBox color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="ReactJS" secondary="Current Version" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <SvgIcon component={ AngularIcon } inheritViewBox color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="AngularJS" secondary="Current Version"  />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <SvgIcon component={ NodeIcon } inheritViewBox color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="NodeJS" secondary="Current Version"  />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <SvgIcon component={ MongoIcon } inheritViewBox color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="MongoDB" secondary="Current Version"  />
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

            <Typography variant="h3">
                Contact
            </Typography>
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