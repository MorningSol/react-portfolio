import React from 'react';



function Nav({ currentPage, handlePageChange }) {
    return (
        <nav className="navbar navbar-expand-lg fs-5 mb-4 py-2">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
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

