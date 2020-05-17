import React from 'react';
import './Sidedrawer.sass'

const sideDrawer = props => {
    let drawerClasses = ['side-drawer'];
    if (props.show) {
        drawerClasses = ['side-drawer open'];
    }
    const resume_pdf = require('../../assets/resume.pdf')
    return (
        <div className={drawerClasses}>
            <ul>
                <li><h2><a href="#about" onClick={props.click}>Skills</a></h2></li>
                <li><h2><a href={resume_pdf} onClick={props.click}>Resume</a></h2></li>
                <li><h2><a href="#projects" onClick={props.click}>Projects</a></h2></li>
                <li><h2><a href="#experience" onClick={props.click}>Experience</a></h2></li>
                <li><h2><a href="mailto:rak535@nyu.edu" target="_blank" onClick={props.click}>Contact</a></h2></li>
            </ul> 
        </div>
    );
};

export default sideDrawer;