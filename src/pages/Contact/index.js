import React from 'react'
import './style.css'

const Component = () => (
    <section className="contact">
        <h2 className="contact__heading">Contact Information</h2>
        <address className="contact__information">
            <strong>David J. Maison Jr.</strong><br />
            Senior UI Architect<br />
            Analog Devices, Inc.<br />
            Boston, Massachusetts<br />
            <a href="mailto:davemaison@gmail.com">davemaison@gmail.com</a><br />
            <a href="tel:978-436-0982">978-436-0982</a>
        </address>
    </section>
)

export default Component