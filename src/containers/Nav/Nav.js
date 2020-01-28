import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Item from '../../components/Nav/Item';
import './style.css';

const Nav = props => (
    <nav className="menu" role="menu">
        { props.menu.map( ( item, index ) => <Item { ...item } key={ `menu-item-${ index }` } /> ) }
    </nav>
);

const mapStateToProps = state => {
    return {
        menu: state.app.menu,
    };
};

export default withRouter( connect( mapStateToProps )( Nav ) );