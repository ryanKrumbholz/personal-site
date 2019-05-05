import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import * as serviceWorker from './serviceWorker';

import Navbar from './components/Navbar/Navbar';
import Body from './components/Home-body/Body';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';

function render() {
    return [
        Navbar(), Body(), Sidebar(), Footer()
    ];
}

ReactDOM.render(render(), document.getElementById('root'));