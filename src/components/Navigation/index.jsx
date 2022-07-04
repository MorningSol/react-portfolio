import React from 'react';



function Nav() {
    return (
        <nav className="navbar navbar-expand-lg fs-5">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link"  href="#about">About Me</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#resume">Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;