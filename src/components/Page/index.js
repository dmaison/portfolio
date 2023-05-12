import PropTypes from 'prop-types';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Page = ({ children, modifier, title }) => {

    const classes = [ 'dm__page' ];

    if( modifier ) classes.push( `${ classes[ 0 ] }--${ modifier }` );

    return (
        <Container className={ classes.join( ' ' ) } sx={{ pb: 2 }}>
            <Typography variant="h2" component="h1">{ title }</Typography>
            { children }
        </Container>
    )

}

Page.propTypes = {
    children: PropTypes.any,
    modifier: PropTypes.string,
    title: PropTypes.string.isRequired
}

export default Page;