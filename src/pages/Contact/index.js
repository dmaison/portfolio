import React from 'react'
import { CURRENT_AGE, EXPERIENCE_TOTAL_YEARS } from '../../constants'
import Icon from '../../components/Icon'
import Me from './img/me.jpg'

import './style.css'

const Component = () => (
    <section className="page-contact">
        <h2>Contact</h2>
        <h3>Short Bio</h3>
        <img src={ Me } alt="me" className="page-contact__photo" />
        <p>
            I am a { CURRENT_AGE } year old Full-stack developer with over { EXPERIENCE_TOTAL_YEARS } years of professional experience, a veteran of the 
            United States Air Force, Husband, and Father.
        </p>
        <p>
            After graduating from a vacational highschool with a focused study on internet technologies, I immediately began my professional career. However, 
            during the recession in 2009, I made the decision to serve the country and joined the United States Air Force assuming the career field my father occupied while he served, Fuels &amp; Cryogentics Specialist  (2F0X1).
        </p>
        <p>
            While in active duty, I continued to hone my development skills as a free-lance developer, until I left active duty in 2014 and switched to reserve duty. During that time, I resumed the full-time profession
            of a full stack developer. I was honorably discharged from service in 2018 after I met my, soon-to-be wife Mallory.
        </p>
        <p>
            2 years later, Mallory and I were married, and shortly after became the proud parents of a baby boy named, Tyr.
        </p>
        <h3>Other Interests</h3>
        <ul>
            <li>Musician</li>
            <li>
                Strongman
                <ul>
                    <li>1st place 2019 Clash of the Titans - u230 Division</li>
                    <li>5th place 2017 New England Intro to Strongman - u230 Division</li>
                </ul>
            </li>
            <li>
                Competitive/Casual PC Gaming
                <ul>
                    <li>Valorant</li>
                    <li>CS:GO</li>
                </ul>
            </li>
        </ul>
        <dl className="page-contact__details">
            <dt className="page-contact__details__label"><Icon name="user" size="small" /></dt>
            <dd className="page-contact__details__data">David J. Maison Jr.</dd>
            <dt className="page-contact__details__label"><Icon name="phone" size="small" /></dt>
            <dd className="page-contact__details__data"><a href="tel:1-978-436-0982">(978) 436-0982</a></dd>
            <dt className="page-contact__details__label"><Icon name="email" size="small" /></dt>
            <dd className="page-contact__details__data"><a href="mailto:davemaison@gmail.com">davemaison@gmail.com</a></dd>
            <dt className="page-contact__details__label"><Icon name="resume" size="small" /></dt>
            <dd className="page-contact__details__data"><a href="https://docs.google.com/document/d/1Oja47J59hTHABMFnyOLPXzgWcLodwdD6YxH1nV6CJaQ/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Résumé</a></dd>
        </dl>
    </section>
)

export default Component