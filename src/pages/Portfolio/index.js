import React from 'react'
import Slider from '../../components/Slider'
import ProjectCard from '../../components/ProjectCard'
import Projects from '../../data/projects.json'
import './style.css'

const Component = () => (
    <section className="page-portfolio">
        <h2>Portfolio</h2>
        <Slider>
            {
                Projects.map( ( job, index ) => <ProjectCard key={ `job-${ index }` } { ...job } /> )
            }
        </Slider>
    </section>
)

export default Component