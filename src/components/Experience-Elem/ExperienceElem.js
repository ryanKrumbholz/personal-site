import React from "react"
import "./Experience-Elem.sass"

const experienceElem = props => {
    const checkState = props => {}
    return (
        <div className="experience-elem">
                    <h1>{props.title}</h1>
                    <h3>{props.company}</h3>
                    <h2>{props.skills}</h2>
                    <p>{props.desc}</p>
                    <p>{"Responsibilities: " + props.responsibilities}</p>
        </div>
    )
}

export default experienceElem;