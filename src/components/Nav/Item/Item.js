import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import ActiveSquare from '../../ActiveSquare';
import './style.css';

function Item( props ){
    return (
        <NavLink className={ props.className || null } exact to={ props.path }>
            <ActiveSquare />
            <span>{ props.title }</span>
        </NavLink>            
    );
}

Item.propTypes = {
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
    language: state.app.language
});

export default withRouter( connect( mapStateToProps )( Item ) );