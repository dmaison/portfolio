import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#ffdf00'
        }
    },
    components: {
        
    },
    typography: {
        fontFamily: [
            'kanit',
            'arial',
            'helvetica',
            'sans-serif'
        ].join( ',' ),
        h1: {
            fontWeight: 'bold',
            textTransform: 'uppercase'
        }
    }
});

theme.components.MuiCssBaseline = {
    styleOverrides: {
        body: {
            scrollbarColor: theme.palette.primary.main,
            "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
                backgroundColor: theme.palette.grey[ 900 ],
            },
            "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
                borderRadius: 8,
                backgroundColor: theme.palette.grey[ 700 ],
                minHeight: 24,
                border: `3px solid ${ theme.palette.grey[ 900 ] }`
            },
            "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
                backgroundColor: theme.palette.primary.main,
            },
            "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
                backgroundColor: theme.palette.primary.main,
            },
            "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
                backgroundColor: theme.palette.primary.main,
            },
            "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
                backgroundColor: theme.palette.primary.main,
            },
        }
    }
};

export default responsiveFontSizes( theme );