import React from 'react'
import { CURRENT_AGE, EXPERIENCE_TOTAL_YEARS } from '../../constants'
import Icon from '../../components/Icon'
import * as ICONS from '../../components/Icon/config'

import Me from './img/me.jpg'

import './style.css'

const Component = () => {

    const Resume = ( <a href="https://docs.google.com/document/d/1Oja47J59hTHABMFnyOLPXzgWcLodwdD6YxH1nV6CJaQ/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Résumé</a> )

    return (
        <section className="page-contact">
            <h2>Contact</h2>
            <div className="page-contact__container">
                <h3>About</h3>
                <img src={ Me } alt="me" className="page-contact__photo" />
                <p>
                    I am a { CURRENT_AGE } year old Full-stack developer with over { EXPERIENCE_TOTAL_YEARS } years of professional experience, a veteran of the 
                    United States Air Force, Husband, and Father.
                </p>
                <p>
                    After graduating from a vocational highschool with a focused study on internet technologies, I immediately began my professional career. However, 
                    during the recession in 2009, I made the decision to serve the country and joined the United States Air Force assuming the career field my father occupied while he served, Fuels &amp; Cryogenics Specialist  (2F0X1).
                </p>
                <p>
                    While in active duty, I continued to hone my development skills as a free-lance developer, until I left active duty in 2014 and switched to reserve duty. During that time, I resumed the full-time profession
                    of a full stack developer. I was honorably discharged from service in 2018 after I met my, soon-to-be wife Mallory.
                </p>
                <p>
                    2 years later, Mallory and I were married, and shortly after became the proud parents of a baby boy named, Tyr.
                </p>
                <h3>Featured Proficiencies</h3>
                <ul className="page-contact__list">
                    <li className="page-contact__list__item"><Icon name={ ICONS.HTML } size="small" color="yellow" />HTML5</li>
                    <li className="page-contact__list__item"><Icon name={ ICONS.CSS } size="small" color="yellow" />CSS3</li>
                    <li className="page-contact__list__item"><Icon name="js" size="small" color="yellow" />Javascript ES2016/V8</li>
                    <li className="page-contact__list__item"><Icon name="react" size="small" color="yellow" />ReactJS</li>
                    <li className="page-contact__list__item"><Icon name="angular" size="small" color="yellow" />AngularJS</li>
                    <li className="page-contact__list__item"><Icon name="node" size="small" color="yellow" />NodeJS</li>
                    <li className="page-contact__list__item"><Icon name="resume" size="small" color="yellow" />See { Resume } for full list</li>
                </ul>
                <h3>Interests</h3>
                <ul className="page-contact__list">
                    <li className="page-contact__list__item"><Icon name="musician" size="small" color="yellow" />Musician</li>
                    <li className="page-contact__list__item">
                        <Icon name="strongman" size="small" color="yellow" />
                        Strongman
                        <ul>
                            <li>2019 - Clash of the Titans - u230 Division - 1<sup>st</sup> place</li>
                            <li>2017 - New England Intro to Strongman - u230 Division - 5<sup>th</sup> place</li>
                        </ul>
                    </li>
                    <li className="page-contact__list__item">
                        <Icon name="gaming" size="small" color="yellow" />
                        PC Gaming
                        <ul>
                            <li>Valorant</li>
                            <li>CS:GO</li>
                        </ul>
                    </li>
                    <li className="page-contact__list__item"><Icon name="hammer" size="small" color="yellow" />Improving my Home</li>
                </ul>
            </div>
            <dl className="page-contact__details">
                <dt className="page-contact__details__label"><Icon name="user" size="small" /></dt>
                <dd className="page-contact__details__data">David J. Maison Jr.</dd>
                <dt className="page-contact__details__label"><Icon name="phone" size="small" /></dt>
                <dd className="page-contact__details__data"><a href="tel:1-978-436-0982">(978) 436-0982</a></dd>
                <dt className="page-contact__details__label"><Icon name="email" size="small" /></dt>
                <dd className="page-contact__details__data"><a href="mailto:davemaison@gmail.com">davemaison@gmail.com</a></dd>
                <dt className="page-contact__details__label"><Icon name="resume" size="small" /></dt>
                <dd className="page-contact__details__data">{ Resume }</dd>
            </dl>
        </section>
    )
}

export default Component