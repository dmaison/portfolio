import React from 'react';
import { connect } from 'react-redux';
import './style.css';

const Resume = props => {

    let filter = job => job.web,
    map = job => {
        let today = new Date(),
        minuend = job.years.end || today.getFullYear(),
        subtrahend = job.years.start;
        return minuend - subtrahend;
    },
    reduce = ( a, b ) => a += b,
    currentJob = props.history.find( job => !job.years.end ),
    totalYears = props.history.filter( filter ).map( map ).reduce( reduce ),
    birthday = new Date( props.birthDate );

    return( 
        <main className="resume">
            <h1>Resume</h1>
            <h2>{ props.name }</h2>
            <ul>
                <li>{ currentJob.jobTitle }</li>
                <li>Born on { `${ birthday.getDate() } ${ props.months[ birthday.getMonth() ] }, ${ birthday.getFullYear() }` }</li>
                <li>{ totalYears } Years experience</li>
            </ul>
        </main>
    );
};

const mapStateToProps = state => {
    return {
        name: state.resume.name,
        birthDate: state.resume.birthDate,
        history: state.resume.history,
        months: state.app.months
    };
};

export default connect( mapStateToProps )( Resume );