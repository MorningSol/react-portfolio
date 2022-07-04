import React from 'react';



function Nav({ currentPage, handlePageChange }) {
    return (
        <nav className="navbar navbar-expand-lg fs-5 mb-5 py-2">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a 
                                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}  
                                href="#about" 
                                onClick={() => handlePageChange('About')}>
                                About Me
                            </a>
                        </li>
                        <li className="nav-item">
                            <a 
                            className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'} 
                            href="#projects" 
                            onClick={() => handlePageChange('Project')}>Projects</a>
                        </li>
                        <li className="nav-item">
                            <a 
                            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} 
                            href="#contact" 
                            onClick={() => handlePageChange('Contact')}>Contact</a>
                        </li>
                        <li className="nav-item">
                            <a 
                            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'} 
                            href="#resume" 
                            onClick={() => handlePageChange('Resume')}>Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;

