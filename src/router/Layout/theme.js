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

export default responsiveFontSizes( theme );