import React from "react"
import "./Experience.sass"
import ExperienceElem from "../Experience-Elem/ExperienceElem";
import { tsPropertySignature } from "@babel/types";

const resume_pdf = require('../../assets/resume.pdf')

const experience = props => {
    return (
        <div className="experience-section">
            <ul>
                <li><ExperienceElem expandableToggle={props.expandableToggleHandler} show={props.show} title="Computer Science TA" skills="Python, Java, & OOP"
                    company="Seattle Central College, Seattle,Wa, 2018" desc="Assisted in teaching the fundamentals of computer science and OOP."
                     responsibilities = "Reinforce fundamentals of programming with students that needed assistance, assist students via email, and occasionally
                      lecture about the fundamentals of programming."/>
                </li>
                <li>
                </li>
            </ul>
            </div>
    )
}

export default experience;