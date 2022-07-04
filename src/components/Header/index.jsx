import React from 'react';
import Nav from '../Navigation';

function Header() {
    return (
        <header className='d-flex flex-row justify-content-between pt-5'>
            <h1>Patrick Laplante</h1>
            <Nav></Nav>
        </header>
    );
}

export default Header;