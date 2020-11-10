import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import './style.css'

const Component = props => (
    <article className="work-card">
        <h3 className="work-card__company">
            <a href={ props.website } target="_blank" rel="noopener noreferrer"><img src={ props.logo } alt={ props.company } /></a>
        </h3>
        <p className="work-card__title">
            <Icon name="hat" color="yellow" />
            { props.title }
        </p>
        <p className="work-card__time-in-position">
            <Icon name="clock" color="yellow" />
            { props.years.start }
            &nbsp;-&nbsp;
            { 
                props.years.end ?
                    props.years.end :
                    'present'
            }
        </p>
        <p className="work-card__description" dangerouslySetInnerHTML={{ __html: props.description }} />
    </article>
)

Component.propTypes = {
    company: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    years: PropTypes.shape({
        end: PropTypes.string,
        start: PropTypes.string.isRequired
    })
}

export default Component 