import React from 'react'
import './Card.sass'

let img;
let title;
let desc;
let github_logo;
let link_logo;
let github_link;
let link;

const card = props => {
    const assign = (
    img = props.img,
    title = props.title,
    desc = props.desc,
    github_logo = props.github_logo,
    link_logo = props.link_logo,
    github_link = props.github_link,
    link = props.link
    );

    return (
    <div className="card">
        <img src={img}/>
        <div className="text">
            <h1>{title}</h1>
            <p>{desc}</p>
            <div className="links">
                <a href={github_link}><img src={github_logo}/></a>
                <a href={link}><img src={link_logo}/></a>
            </div>
        </div>
    </div>
    );
    }


export default card;