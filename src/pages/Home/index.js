import React from 'react'
import Quotes from '../../data/quotes.json'
import './style.css'

const Component = () => {

    const index = Math.floor( Math.random() * Quotes.length ),
    quote = Quotes[ index ];

    return (
        <section className="page-home">
            <h2>Welcome</h2>
            <blockquote className="page-home__quote">
                { quote.quote }
                <footer className="page-home__quote__quotee">- { quote.quotee }</footer>
            </blockquote>
        </section>
    )
}

export default Component