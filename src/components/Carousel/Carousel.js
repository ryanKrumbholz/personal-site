import React from 'react';
import './Carousel.sass';
import Card from '../Card/Card';
import { createRequireFromPath } from 'module';

const carousel = props => (
    <div>
        <Card img={require('../../assets/trump-tracker.png')} title="Tweet Tracking Bot" desc="Developed a Twitter bot that tracks the number of times
        that an individual tweets daily and hourly. For this project the Twitter api, Tweepy api, and Python were used." github_logo={require('../../assets/github_logo.png')} link_logo={require('../../assets/link.png')}
            github_link="https://github.com/ryanKrumbholz/trump-twitter-tracker" link="https://twitter.com/trumptrackernow"/>
        <Card img={require('../../assets/mathup.png')} title="MathUp!" desc="Currently developing an Android app that allows the user to practice and learn elementary level math.
        Built with Kotlin, Firebase, and a noSQL database." github_logo={require('../../assets/github_logo.png')} link_logo={require('../../assets/link.png')}
            github_link="https://github.com/ryanKrumbholz/mathup-app" link="https://github.com/ryanKrumbholz/mathup-app"/>
        <Card img={require('../../assets/expensey.png')} title="Expensey!" desc="Currently developing an Expensify clone.
     Built with the MERN stack." github_logo={require('../../assets/github_logo.png')} link_logo={require('../../assets/link.png')}
        github_link="https://github.com/ryanKrumbholz/expensify-clone" link="https://github.com/ryanKrumbholz/expensify-clone"/>
    </div>
);

export default carousel;