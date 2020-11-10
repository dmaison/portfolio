import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import './style.css'

const Component = props => (
    <article className="project-card">
        <h3 className="project-card__title">
            <a href={ props.url } target="_blank" rel="noopener noreferrer">
                {
                    props.image ?
                        <img src={ props.image } alt={ props.name } className="project-card__title__image" /> :
                        props.name
                }
            </a>
        </h3>
        <p className="project-card__type">
            <Icon name={ props.type } color="yellow" />
            { props.type } Project
        </p>
        <p className="project-card__description" dangerouslySetInnerHTML={{ __html: props.description }} />
    </article>
)

Component.propTypes = {
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default Component 