import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

const Layout = ({ children }) => (
    <ThemeProvider theme={ theme }>
        <CssBaseline />
        { children }
    </ThemeProvider>
)

export default Layout;