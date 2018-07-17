import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Item from '../../components/Nav/Item';
import Logo from '../../components/Logo';
import './style.css';

const Nav = props => (
    <section role="menu"> 
        <Logo />
        <nav className="menu">
            { props.menu.map( ( item, index ) => <Item { ...item } key={ `menu-item-${ index }` } /> ) }
        </nav>
    </section>
);

const mapStateToProps = state => {
    return {
        menu: state.app.menu,
    };
};

export default withRouter( connect( mapStateToProps )( Nav ) );