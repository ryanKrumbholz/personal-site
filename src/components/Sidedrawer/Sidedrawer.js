import React from 'react';
import './Sidedrawer.sass'

const sideDrawer = props => {
    let drawerClasses = ['side-drawer'];
    if (props.show) {
        drawerClasses = ['side-drawer open'];
    }
    return (
        <div className={drawerClasses}>
            <ul>
                <li><h2><a href="index.html" onClick={props.click}>Home</a></h2></li>
                <li><h2><a href="#about" onClick={props.click}>About</a></h2></li>
                <li><h2><a href="#experience" onClick={props.click}>Experience</a></h2></li>
                <li><h2><a href="#projects" onClick={props.click}>Projects</a></h2></li>
                <li><h2><a href="#contact" onClick={props.click}>Contact</a></h2></li>
            </ul> 
        </div>
    );
};

export default sideDrawer;