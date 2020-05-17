import React from 'react';
import './Body.sass';
import Carousel from '../Carousel/Carousel';
import Experience from '../Experience/Experience';

const body = props => (
        <div className="container">
            <div className="hero">
                <h1>Ryan Krumbholz</h1>
                <h2>Full-stack Software Engineer</h2>
                <p> My goal is to make the world a more connected place through technology.<br/>I pride myself on being hardworking, reliable, and team oriented.</p>
            </div>
        <div className="about" id="about">
                <h1>Skills</h1> 
                <div className="skills">
                    <ul className="skills-column1">
                            <li>Javascript</li>
                            <li>Java</li>
                            <li>Python</li>
                            <li>Kotlin</li>
                    </ul>
                    <ul className="skills-column1"> 
                            <li>React</li>
                            <li>Node</li>
                            <li>Express</li>
                            <li>GraphQL</li>
                    </ul>
                    <ul> 
                            <li>Mongo</li>
                            <li>NoSQL</li>
                    </ul>
                </div>
        </div>
        <div className="projects" id="projects">
                <h1>Projects</h1>
                <p></p>
                <div className="carousel">
                        <Carousel/>
                </div>
        </div>
        <div className="experience" id="experience">
                <h1>Experience</h1>
                <Experience expandableToggleHandler={props.expandableToggleHandler} show={props.show}/>
        </div>
    </div>
    );
    
export default body;
