import React from 'react';
import './Sidebar.sass';

const link_logo = require("../../assets/link_logo.png")
const github_logo = require("../../assets/github_logo.png")
const ig_logo = require("../../assets/ig_logo.png")
const mail_logo = require("../../assets/mail_logo.png")

const sidebar = props => (
        <div className="sidebar" id="sidebar">
            <a href="https://linkedin.com/in/ryankrumbholz/" target="_blank"><img src={link_logo}/></a>
            <a href="https://github.com/ryanKrumbholz/" target="_blank"><img src={github_logo}/></a>
            <a href="mailto:rak535@nyu.edu" target="_blank"><img src={mail_logo}/></a>
        </div>
    );

export default sidebar;
