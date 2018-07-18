import React from 'react';
import './style.css';

const Card = props => (
    <div className="card">
        <img src={ props.logo } alt={ props.company } className="logo" />
        <div className="details">
            <p>{ props.jobTitle }</p>
            <p>{ `${ props.years.start } - ${ props.years.end || 'Present' }` }</p>
            <p>{ props.description }</p>
            { 
                props.responsibilities ? 
                    <ul>
                        { props.responsibilities.map( ( responsibility, index ) => <li key={ `responsibilities-${ index }` }>{ responsibility }</li>) }
                    </ul>:
                    null
            }
        </div>
    </div>
);

export default Card;