import React from 'react';
import './Sidebar.sass';

const link_logo = require("../../assets/link_logo.png")
const github_logo = require("../../assets/github_logo.png")
const ig_logo = require("../../assets/ig_logo.png")
const mail_logo = require("../../assets/mail_logo.png")

const sidebar = props => (
        <div className="sidebar" id="sidebar">
            <a href="https://linkedin.com/in/ryankrumbholz/"><img src={link_logo}/></a>
            <a href="https://github.com/ryanKrumbholz/"><img src={github_logo}/></a>
            <a href="https://instagram.com/ryan_a_rawlings/"><img src={ig_logo}/></a>
            <a href="mailto:rak535@nyu.edu"><img src={mail_logo}/></a>
        </div>
    );

export default sidebar;
