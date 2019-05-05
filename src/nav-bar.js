import React from 'react';
import './index.sass';
import './nav.sass';

const logo = require('./assets/rk.png')
const hamburger = require('./assets/hamburger.png')

function nav() {
    return (
            <div className="head">
                <a className="logo" href="index.html"><img src={logo}/></a>
                <ul>
                    <li><a className="hamburger" href="#"><img src={hamburger}/></a></li>
                    <li><h2><a href="index.html">Home</a></h2></li>
                    <li><h2><a href="#about">About</a></h2></li>
                    <li><h2><a href="#experience">Experience</a></h2></li>
                    <li><h2><a href="#projects">Projects</a></h2></li>
                    <li><h2><a href="#contact">Contact</a></h2></li>
                    
                </ul> 
                    
            </div>
    )
}

export default nav;
