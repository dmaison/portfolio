import React from 'react'
import Masonry from 'react-masonry-component'
import jobs from '../../data/experience.json'
import './style.css'

const masonryOptions = {
    transitionDuration: 0
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }

function getYears( y1, y2 ) {
    let d1 = new Date( `1/1/${ y1 }` ),
    d2 = y2 ? new Date( `1/1/${ y2 }` ) : new Date(),
    diff =( d2.getTime() - d1.getTime() ) / 1000;
    diff /= ( 60 * 60 * 24 );
    let total = Math.abs( Math.round( diff/365.25 ) );
    return total === 0 ? '> 1' : total;
}

const Job = job => (
    <article className="experience__jobs__job">
        <img className="experience__jobs__job__logo" src={ job.logo } alt={ `${ job.company }'s logo`} />
        <h3>{ job.title }</h3>
        <span className="experience__jobs__job__years">{ getYears( job.years.start, job.years.end ) } years</span>
        <p>{ job.description }</p>
    </article>
);

const Component = () => (
    <section className="experience">
        <h2 className="experience__heading">Work History</h2>
        <Masonry
            className="experience__jobs"
            options={masonryOptions}
            updateOnEachImageLoad
            imagesLoadedOptions={ imagesLoadedOptions }>
                { jobs.map( ( job, index ) => <Job { ...job } key={ `job- ${ index }` } /> ) }
            </Masonry>
    </section>
)

export default Component