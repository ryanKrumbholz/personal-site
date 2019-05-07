import React from 'react';
import './Body.sass';
import Carousel from '../Carousel/Carousel';
import Experience from '../Experience/Experience';

const body = props => (
        <div className="container">
            <div className="hero">
                <h1>Ryan Krumbholz</h1>
                <h2>Computer Science Major @ NYU 21'</h2>
                <p> My goal is to make the world a more connected place through technology.<br/>
                    I'm interested in pursuing a career in one of these fields: full-stack development, mobile development, or machine learning.
                </p>
                <a href="mailto:rak535@nyu.edu">Contact Me</a>
            </div>
        <div className="about" id="about">
                <h1>About Me</h1>
                <p>My name is Ryan Krumbholz. I am a computer science major at NYU, class of 2021. I pride myself on being hardworking, reliable, and team oriented. I'm currently seeking an opportunity in mobile development, full-stack development, and/or machine learning.<br/><br/> Below are some of the technologies I am familiar with:</p>
                <div className="skills">
                    <ul className="skills-column1">
                            <li>Python</li>
                            <li>Java</li>
                            <li>Kotlin</li>
                            <li>Git</li>
                    </ul>
                    <ul className="skills-column2"> 
                            <li>HTML/CSS</li>
                            <li>Javascript</li>
                            <li>OOP</li>
                            <li>React</li>
                    </ul>
                </div>
        </div>
        <div className="experience" id="experience">
                <h1>Experience</h1>
                <Experience expandableToggleHandler={props.expandableToggleHandler} show={props.show}/>
        </div>
        <div className="projects" id="projects">
                <h1>Projects</h1>
                <p></p>
                <div className="carousel">
                        <Carousel/>
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
