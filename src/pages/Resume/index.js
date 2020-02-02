import React, { useEffect, useState } from 'react'
import { InView } from 'react-intersection-observer'
import Page from '../../components/Page'
import Job from '../../components/Job'
import Masonry from 'react-masonry-component'
import ResumeData from '../../data/resume'
import './style.css'

function Resume( props ){
    
    const [ visible, setVisible ] = useState( false );

    useEffect(() => {
        console.log( 'test' )
    })

    const handleVisible = ( inView, entry ) => {
        console.log( inView, entry );
    }

    return (
        <InView onChange={ handleVisible }>
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
        </InView>
    )

}

export default Resume