import React from 'react';
import './style.css';

const Home = props => (
    <main className="home">
        <h1>Home</h1>
        <p>
            I am David Maison, a Full stack developer from Massachusetts, and this is my portfolio site that's built 
            in <a href="https://reactjs.org/" target="_blank">React</a>. You may also noticed it does not utilize any CSS libraries, 
            like <a href="https://getbootstrap.com/" target="_blank">Bootstrap</a> or <a href="https://semantic-ui.com/" target="_blank">Semantic UI</a>, because 
            I was attempting to create a custom and unique experience to showcase my abilities.
        </p>
        <p>
            If you're curious to see the unpackaged version of this site, feel free to check out 
            the <a href="https://github.com/dmaison/portfolio" target="_blank">Github repo</a>.
        </p>
    </main>
);

export default Home;