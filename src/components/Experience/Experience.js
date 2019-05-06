import React from "react"
import "./Experience.sass"
import ExperienceElem from "../Experience-Elem/ExperienceElem";

const experience = () => {
    return (
        <div className="experience-section">
            <ExperienceElem title="Computer Science TA"
                    company="Seattle Central College" desc="Assisted in teaching the fundamentals of computer science and OOP. Languages used: Python and Java."/>
        </div>
    )
}

export default experience;