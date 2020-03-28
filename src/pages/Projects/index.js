import React from 'react'
import Masonry from 'react-masonry-component'
import projects from '../../data/projects.json'
import './style.css'

const masonryOptions = {
    transitionDuration: 0
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }

const Project = project => (
    <article className="projects__list_project">
        <h3>{ project.name }</h3>
        <p>
            { project.description }
        </p>
    </article>
);

const Component = () => (
    <section className="projects">
        <h2 className="projects__heading">Personal Projects</h2>
        <Masonry
            className="projects__list"
            options={masonryOptions}
            updateOnEachImageLoad
            imagesLoadedOptions={ imagesLoadedOptions }>
                { projects.map( ( project, index ) => <Project { ...project } key={ `project- ${ index }` } /> ) }
            </Masonry>
    </section>
)

export default Component