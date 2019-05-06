import React from 'react';
import './Carousel.sass';
import Card from '../Card/Card';
import { createRequireFromPath } from 'module';

const carousel = props => (
    <div>
    <Card img={require('../../assets/trump-tracker.png')} title="Tweet Tracking Bot" desc="Developed a Twitter bot that tracks the number of times
    that an individual tweets daily and hourly. For this project the Twitter api, Tweepy api, and Python were used." github_logo={require('../../assets/github_logo.png')} link_logo={require('../../assets/link.png')}
        github_link="https://github.com/ryanKrumbholz/trump-twitter-tracker" link="https://twitter.com/trumptrackernow"/>
    </div>
);

export default carousel;