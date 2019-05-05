import React from 'react';
import './Navbar.sass';

const logo = require('../../assets/rk.png')
const hamburger = require('../../assets/hamburger.png')

let drawerButton = document.getElementsByClassName("hamburger")

const navbar = props => (
            <div className="head">
                <a className="logo" href="index.html"><img src={logo}/></a>
                <ul>
                    <li><button type="button" onClick={props.drawerClickerHandler} className="hamburger" ><img src={hamburger}/></button></li>
                    <li><h2><a href="index.html">Home</a></h2></li>
                    <li><h2><a href="#about">About</a></h2></li>
                    <li><h2><a href="#experience" >Experience</a></h2></li>
                    <li><h2><a href="#projects">Projects</a></h2></li>
                    <li><h2><a href="#contact">Contact</a></h2></li>
                    
                </ul> 
                    
            </div>
);

export default navbar;