import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.sass';
import Card from '../Card/Card';
import { createRequireFromPath } from 'module';

const carousel = props => (
    <div class="cards">
        <Card img={require('../../assets/expensey.png')} title="Expensey" desc="Expense tracking web app for individuals and small businesses." github_logo={require('../../assets/github_logo.png')} link_logo={require('../../assets/link.png')}
        github_link="https://github.com/ryanKrumbholz/expensify-clone" link="https://www.expensey.app" skills="React, Express, Mongo, Redux, & Node"/>

        <Card img={require('../../assets/mathup.png')} title="Mathup" desc="An application to practice your math skills, from elementary to college math." github_logo={require('../../assets/github_logo.png')} link_logo={require('../../assets/link.png')}
        github_link="https://github.com/ryanKrumbholz/mathup" link="https://agitated-kirch-215b94.netlify.app" skills="React, Redux, Express, JavaScript"/>

        <Card img={require('../../assets/trump-tracker.png')} title="Tweet Tracking Bot" desc="Twitter bot that tracks the number of times
        that an individual tweets daily and hourly. Project has been decommissioned." github_logo={require('../../assets/github_logo.png')} link_logo={require('../../assets/link.png')}
            github_link="https://github.com/ryanKrumbholz/trump-twitter-tracker" link="https://twitter.com/trumptrackernow" skills="Python & Twitter API"/>

        <Card img={require('../../assets/res-builder.png')} title="Res-Builder" desc="Resume auto formatter. Enter data in given fields and have a preformatted resume." github_logo={require('../../assets/github_logo.png')} link_logo={require('../../assets/link.png')}
        github_link="https://github.com/ryanKrumbholz/res-builder" link="https://pedantic-johnson-8da5de.netlify.app/" skills="React & Javascript"/>
       
    </div>
);

export default carousel;