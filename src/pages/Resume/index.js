import React from 'react'
import Page from '../../components/Page'
import Job from '../../components/Job'
import Masonry from 'react-masonry-component'
import ResumeData from '../../data/resume'
import './style.css'

function Resume( props ){
    
    return (
        <Page id="resume">
            <Page.Container>
                <h2>Resume</h2>
                <Masonry className="jobs">
                    {
                        ResumeData.history.map( ( job, index ) => <Job { ...job } key={ index } /> )
                    }
                </Masonry>
            </Page.Container>
        </Page>
    )

}

export default Resume