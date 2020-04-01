import React from 'react';
import { Link } from 'react-router-dom'

function Header() {
    return (
        <React.Fragment>
            <header className="header">
                <h1 className="text-center">
                    Users List
        </h1>
                <div className="links">
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/about">About</Link>
                </div>
            </header>
            <div className="footer-bottom ">
                <div className="container">
                    <p className="pull-left"> 2020 Copyright © Users </p>
                </div>
            </div>
        </React.Fragment>
    );
}


export default Header;