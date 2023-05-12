import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import SvgIcon from '@mui/material/SvgIcon';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import HistoryIcon from '@mui/icons-material/History';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CollectionsIcon from '@mui/icons-material/Collections';
import { ReactComponent as StackOverflowIcon } from './media/icon-stack-overflow.svg';
import { NavLink, useLocation } from 'react-router-dom';
import theme from "./theme";
import { PATH_ABOUT, PATH_ALBUM, PATH_EXPERIENCE, PATH_HOME, PATH_PORTFOLIO } from "../config";
import { HREF_GITHUB, HREF_LINKED_IN, HREF_STACK_OVERFLOW } from "./config";
import { styled } from '@mui/material/styles';
import { useEffect, useRef } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import { alpha } from "@mui/material";

const NavButton = styled( IconButton )(({ theme }) => ({
    fontSize: useMediaQuery( theme.breakpoints.down( 'md' ) ) ? '30px' :' 50px',
    ':hover': {
        color: theme.palette.primary.main
    },
    '&&.active': {
        color: theme.palette.primary.main
    }
}));

const Layout = ({ children }) => {

    const location = useLocation(),
    titleRef = useRef( null );

    // scroll back to the top whenever the location changes
    useEffect(() => {
        titleRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [ location, titleRef ]);

    return (
        <ThemeProvider theme={ theme }>
            <CssBaseline />
            <Container sx={{ mb: 4 }}>
                <Typography 
                    ref={ titleRef }
                    color="primary" 
                    component={ NavLink }
                    variant="h1"
                    sx={{ textDecoration: 'none' }} 
                    to={ PATH_HOME }>Dave Maison</Typography>
                <Stack 
                    direction="row" 
                    alignItems="center" 
                    sx={{ 
                        backgroundColor: alpha( theme.palette.background.default, .85 ), 
                        position: 'sticky', 
                        top: 0, 
                        zIndex: 999 
                    }}>
                    <NavButton component={ NavLink } to={ PATH_ABOUT } aria-label="About">
                        <RecentActorsIcon fontSize="inherit" />
                    </NavButton>
                    <NavButton component={ NavLink } to={ PATH_ALBUM } aria-label="Album">
                        <CollectionsIcon fontSize="inherit" />
                    </NavButton>
                    <NavButton component={ NavLink } to={ PATH_EXPERIENCE } aria-label="Experience">
                        <HistoryIcon fontSize="inherit" />
                    </NavButton>
                    <NavButton component={ NavLink } to={ PATH_PORTFOLIO } aria-label="Portfolio">
                        <FolderCopyIcon fontSize="inherit" />
                    </NavButton>
                    <NavButton component={ Link } href={ HREF_LINKED_IN } target="_blank" aria-label="linkedIn">
                        <LinkedInIcon fontSize="inherit" />
                    </NavButton>
                    <NavButton component={ Link } href={ HREF_GITHUB } target="_blank" aria-label="GitHub">
                        <GitHubIcon fontSize="inherit" />
                    </NavButton>
                    <NavButton component={ Link } href={ HREF_STACK_OVERFLOW } target="_blank" aria-label="Stack Overflow">
                        <SvgIcon component={ StackOverflowIcon } inheritViewBox fontSize="inherit" />
                    </NavButton>
                </Stack>
                { children }
            </Container>
        </ThemeProvider>
    )
}

export default Layout;