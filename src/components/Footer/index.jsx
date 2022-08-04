import React from 'react';





function Footer() {
    return (
        <footer className='mt-auto pt-4 pb-3'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='m-3 p-0 col-2 col-md-1'>
                        <a className='link-dark' rel='noreferrer' href="https://github.com/MorningSol" target="_blank">
                            <i className="fa-brands fa-github-square fa-4x"></i>
                        </a>
                    </div>
                    <div className='m-3 p-0 col-2 col-md-1'>
                        <a className='link-dark' rel='noreferrer' href="https://www.linkedin.com/in/patrick-laplante-845649231/" target="_blank">
                            <i className="fa-brands fa-linkedin fa-4x"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;