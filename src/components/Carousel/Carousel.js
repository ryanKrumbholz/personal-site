import React from 'react';
import './Carousel.sass';
import Card from '../Card/Card';
import { createRequireFromPath } from 'module';

const carousel = props => (
    <div>
        <Card img={require('../../assets/trump-tracker.png')} title="Tweet Tracking Bot" desc="Developed a Twitter bot that tracks the number of times
        that an individual tweets daily and hourly. Built with the Twitter api, Tweepy api, and Python. Project has been decommissioned at the moment" github_logo={require('../../assets/github_logo.png')} link_logo={require('../../assets/link.png')}
            github_link="https://github.com/ryanKrumbholz/trump-twitter-tracker" link="https://twitter.com/trumptrackernow" skills="Python & Twitter API"/>
        <div id="card2">
        <Card img={require('../../assets/expensey.png')} title="Expensey" desc="Developed an expense tracking full-stack web application for individuals and small businesses.
        Built with the MERN stack." github_logo={require('../../assets/github_logo.png')} link_logo={require('../../assets/link.png')}
        github_link="https://github.com/ryanKrumbholz/expensify-clone" link="https://expensey.app" skills="React, Express, Mongo, Redux, & Node"/>
        </div>
    </div>
);

export default carousel;