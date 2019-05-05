import React from 'react';
import './Body.sass';

const resume_logo = require('../../assets/resume.png')
const resume_pdf = require('../../assets/resume.pdf')

const body = props => (
        <div className="container">
            <div className="hero">
                <h1>Ryan Krumbholz</h1>
                <h2>Computer Science Major @ NYU 21'</h2>
                <p> My goal is to make the world a more connected place through technology.<br/>
                    I'm interested in pursuing a career in one of these fields: full-stack development, mobile development,<br/> or machine learning.
                </p>
                <a href="mailto:rak535@nyu.edu">Contact Me</a>
            </div>
        <div className="about" id="about">
                <h1>About Me</h1>
                <p>My name is Ryan Krumbholz. I am a computer science major at NYU, className of 2021. I pride myself in being hardworking, reliable, and team oriented. I'm currently seeking an opportunity in mobile development, full-stack development, and/or machine learning.<br/><br/> Below are some of the technologies I am familiar with:</p>
                <div className="skills">
                    <ul className="skills-column1">
                            <li>Python</li>
                            <li>Java</li>
                            <li>Kotlin</li>
                    </ul>
                    <ul className="skills-column2"> 
                            <li>HTML/CSS</li>
                            <li>Javascript</li>
                            <li>OOP</li>
                    </ul>
                </div>
        </div>
        <div className="experience" id="experience">
                <h1>Experience</h1>
                <p></p>
                <div className="resume">
                    <a href={resume_pdf}><img src={resume_logo}/><p>resume</p></a>
                </div>
        </div>
        <div className="projects" id="projects">
                <h1>Projects</h1>
                <p></p>
                <div className="featured-1">
                </div>
                <div className="featured-2">
                </div>
        </div>
        <div className="contact" id="contact">
                <h1>Contact Me</h1>
                <p>Actively looking for opportunities!<br/> Feel free to contact me below!</p>
                <a href="mailto:rak535@nyu.edu">Contact me</a>
        </div>
    </div>
    );
    
export default body;
