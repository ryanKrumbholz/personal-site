import React from "react"
import "./Experience-Elem.sass"

const experienceElem = props => {
    const checkState = props => {}
    let expTextClass = 'exp-text';
    if(props.show) {
        expTextClass = 'exp-text-open';
        console.log(props.show);

    }
    return (
        <div className="experience-elem">
                <button className="expandable" onClick={props.expandableToggle}><h1>{props.title}</h1></button>
                <div className={expTextClass}>
                    <h2>{props.company}</h2>
                    <p>{props.desc}</p>
                </div>
        </div>
    )
}

export default experienceElem;