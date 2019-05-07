import React from "react"
import "./Experience.sass"
import ExperienceElem from "../Experience-Elem/ExperienceElem";
import { tsPropertySignature } from "@babel/types";

const resume_pdf = require('../../assets/resume.pdf')

const experience = props => {
    return (
        <div className="experience-section">
            <ul>
                <li><ExperienceElem expandableToggle={props.expandableToggleHandler} show={props.show} title="Computer Science TA"
                    company="Seattle Central College - 2018" desc="Assisted in teaching the fundamentals of computer science and OOP. Languages used: Python and Java.
                     Responsibilities: reinforce fundamentals of programming with students that needed assistance, assist students via email, and occasionally
                      lecture about the fundamentals of programming."/>
                </li>
                <li>
                    <a href={resume_pdf}>
                        <ExperienceElem title="Resume"/>
                    </a>
                </li>
            </ul>
            </div>
    )
}

export default experience;