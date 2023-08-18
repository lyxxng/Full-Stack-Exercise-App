import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav className="App-nav">
            <Link to="/">Home</Link>
            <span>&emsp;</span>
            <Link to="/add-exercise">Add Exercise</Link>
        </nav>
    );
}

export default Navigation;