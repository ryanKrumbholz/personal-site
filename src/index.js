import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import nav from './nav-bar';
import body from './body';
import sidebar from './sidebar';
import foot from './foot';
import * as serviceWorker from './serviceWorker';

function render() {
    return [
        nav(), body(), sidebar(), foot()
    ];
}

ReactDOM.render(render(), document.getElementById('root'));