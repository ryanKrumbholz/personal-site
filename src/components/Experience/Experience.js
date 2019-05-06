import React from "react"
import "./Experience.sass"
import ExperienceElem from "../Experience-Elem/ExperienceElem";

const experience = () => {
    return (
        <div className="experience-section">
            <ExperienceElem title="Computer Science TA"
                    company="Seattle Central College" desc="desc"/>
        </div>
    )
}

export default experience;