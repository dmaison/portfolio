import React from 'react'
import './style.css'

const Job = props => (
    <article className="job">
        <div className="container">
            <img src={ props.logo } alt={ props.company } className="logo" />
            <h3>
                { props.company }
                <small>{ `${ props.years.start } - ${ props.years.end || 'present' }` }</small>
            </h3>
            <h4>{ props.title }</h4>
            <p>{ props.description }</p>
            <ul>
                { 
                    props.responsibilities && props.responsibilities.map( ( responsibility, index ) => <li key={ index }>{ responsibility }</li> )
                }
            </ul>
        </div>
    </article>
)

export default Job;