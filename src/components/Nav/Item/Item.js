import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import ActiveSquare from '../../ActiveSquare';
import './style.css';

class Item extends React.Component {

    constructor( props ){
        super( props );
    }

    static propTypes = {
        path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    }

    render(){
        return (
            <NavLink className={ this.props.className || null } exact to={ this.props.path }>
                <ActiveSquare />
                <span>{ this.props.title }</span>
            </NavLink>            
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

export default withRouter( connect( mapStateToProps )( Item ) );