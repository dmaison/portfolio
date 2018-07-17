import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

class ActiveSquare extends React.PureComponent {

    static defaultProps = {
        active: false
    }

    static propTypes = {
        active: PropTypes.bool
    }

    render(){

        let classList = [ 'square' ];

        if( this.props.active ) classList.push( 'active' );

        return(
            <i className={ classList.join( ' ' ) } />
        );
        
    }

}

export default ActiveSquare;