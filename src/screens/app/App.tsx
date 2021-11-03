// @ts-ignore
import React from 'react';
import './app.scss';
import Home from '../home/home';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import Welcome from '../welcome/welcome';

function App(props) {
    let { path, url } = useRouteMatch();

    return (
        <div>
            <Home/>
        </div>
    );
}

export default App;