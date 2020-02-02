import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

const Page = props => (
    <section id={ props.id } className="page">
        { props.children }
    </section>
);

Page.propTypes = {
    id: PropTypes.string.isRequired
};

Page.Container = props => (
    <div className="container">
        { props.children }
    </div>
);

export default Page;