import React from 'react';
import './Navbar.sass';

const hamburger = require('../../assets/hamburger.png')

let drawerButton = document.getElementsByClassName("hamburger")

const navbar = props => {
    const resume_pdf = require('../../assets/resume.pdf')
    return(
            <div className="head">

                <ul>
                    <li><button type="button" onClick={props.drawerClickerHandler} className="hamburger" ><img src={hamburger}/></button></li>
                    <li><h2><a href="#about">Skills</a></h2></li>
                    <li><h2><a href={resume_pdf}>Resume</a></h2></li>
                    <li><h2><a href="#projects">Projects</a></h2></li>
                    <li><h2><a href="#experience" >Experience</a></h2></li>
                    <li><h2><a href="mailto:rak535@nyu.edu" target="_blank">Contact</a></h2></li>
                    
                </ul> 
                    
            </div>
)
};

export default navbar;