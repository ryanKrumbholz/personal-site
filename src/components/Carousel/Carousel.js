import React from 'react';
import './Carousel.sass';
import Card from '../Card/Card';
import { createRequireFromPath } from 'module';

const carousel = props => (
    <div>
        <Card img={require('../../assets/trump-tracker.png')} title="Tweet Tracking Bot" desc="Twitter bot that tracks the number of times
        that an individual tweets daily and hourly. Project has been decommissioned." github_logo={require('../../assets/github_logo.png')} link_logo={require('../../assets/link.png')}
            github_link="https://github.com/ryanKrumbholz/trump-twitter-tracker" link="https://twitter.com/trumptrackernow" skills="Python & Twitter API"/>
        <div id="card2">
        <Card img={require('../../assets/expensey.png')} title="Expensey" desc="Expense tracking web app for individuals and small businesses." github_logo={require('../../assets/github_logo.png')} link_logo={require('../../assets/link.png')}
        github_link="https://github.com/ryanKrumbholz/expensify-clone" link="https://www.expensey.app" skills="React, Express, Mongo, Redux, & Node"/>
        </div>
        <div id="card3">
        <Card img={require('../../assets/res-builder.png')} title="Res-Builder" desc="Resume auto formatter. Enter data in given fields and have a preformatted resume." github_logo={require('../../assets/github_logo.png')} link_logo={require('../../assets/link.png')}
        github_link="https://github.com/ryanKrumbholz/res-builder" link="https://pedantic-johnson-8da5de.netlify.app/" skills="React & Javascript"/>
        </div>
    </div>
);

export default carousel;