import React from 'react'
import Slider from '../../components/Slider'
import WorkCard from '../../components/WorkCard'
import Jobs from '../../data/experience.json'
import './style.css'

const Component = () => (
    <section className="page-work-history">
        <h2>Work History</h2>
        <Slider>
            {
                Jobs.map( ( job, index ) => <WorkCard key={ `job-${ index }` } { ...job } /> )
            }
        </Slider>
    </section>
)

export default Component