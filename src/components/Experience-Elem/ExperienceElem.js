import React from "react"
import "./Experience-Elem.sass"

const experienceElem = props => {
    return (
        <div className="experience-elem">
            <div className="exp-text">
                <h1>{props.title}</h1>
                <h2>{props.company}</h2>
                <p>{props.desc}</p>
            </div>
            
        </div>
    )
}

export default experienceElem;