import React from 'react';
import Concertium from '../../assets/img/Concertium.jpg';
import BookBeans from '../../assets/img/bookcoffee.jpg';
import RunBuddy from '../../assets/img/hero-bg.jpg';
import Surf from '../../assets/img/rafael-leao.jpg';

function Project() {
    return (
        <section className="m-5">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col project">
                    <div className="card bg-dark text-white ratio ratio-16x9 border border-3 border-dark rounded p-4">
                        <img src={Concertium} className="card-img" alt="Concertium project"></img>
                        <div className="card-img-overlay">
                            <h3 className="card-title">Concertium</h3>
                            <p className="card-text">Javascript/HTML/CSS Bulma</p>
                            <button className="stretched-link opacity-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseConcertium" aria-expanded="false" aria-controls="collapseConcertium">
                            </button> 
                        </div>
                    </div> 
                    <div className='collapse' id="collapseConcertium" >
                        <div className='d-flex justify-content-evenly'>
                            <a className='link-dark m-2' href='https://github.com/MorningSol/concertium' rel='noreferrer' target="_blank">
                                <i className="fa-brands fa-github fa-3x"></i> Github Repo
                            </a>
                            <a className='link-dark m-2' href='https://morningsol.github.io/concertium/' rel='noreferrer' target="_blank" >
                                <i className="fa-regular fa-circle-play fa-3x"></i> Deployed App
                            </a>
                        </div>    
                    </div>
                </div>
                
                <div className="col project">
                    <div className="card bg-dark text-white ratio ratio-16x9 border border-3 border-dark rounded p-4">
                        <img src={BookBeans} className="card-img" alt="Books and Beans project"></img>
                        <div className="card-img-overlay">
                            <h3 className="card-title">Books and Beans</h3>
                            <p className="card-text">JS/CSS Bootstrap/Node/Bcrypt/Mysql2<br/>Sequelize/Express(Session/Handlebars)</p>
                            <button className="stretched-link opacity-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBB" aria-expanded="false" aria-controls="collapseBB">
                            </button>
                        </div>       
                    </div>
                    <div className='collapse' id="collapseBB" >
                        <div className='d-flex justify-content-evenly'>
                            <a className='link-dark m-2' href='https://github.com/haleytelega/Book-Beans' rel='noreferrer' target="_blank">
                                <i className="fa-brands fa-github fa-3x"></i> Github Repo
                            </a>
                            <a className='link-dark m-2' href='https://book-and-beans.herokuapp.com/' rel='noreferrer' target="_blank">
                                <i className="fa-regular fa-circle-play fa-3x"></i> Deployed App
                            </a> 
                        </div>   
                    </div>
                </div>

                <div className="col project">
                    <div  className="card bg-dark text-white ratio ratio-16x9 border border-3 border-dark rounded p-4">
                        <img src={RunBuddy} className="card-img" alt="Run Buddy project"></img>
                        <div className="card-img-overlay">
                            <h3 className="card-title">Run Buddy</h3>
                            <p className="card-text">HTML/CSS</p>
                            <button className="stretched-link opacity-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseRunBuddy" aria-expanded="false" aria-controls="collapseRunBuddy">
                            </button>
                        </div> 
                    </div> 
                    <div className='collapse' id="collapseRunBuddy" >
                        <div className='d-flex justify-content-evenly'>
                            <a className='link-dark m-2' href='https://github.com/MorningSol/run-buddy' rel='noreferrer' target="_blank">
                                <i className="fa-brands fa-github fa-3x"></i> Github Repo
                            </a>
                            <a className='link-dark m-2' href='https://morningsol.github.io/run-buddy/' rel='noreferrer' target="_blank">
                                <i className="fa-regular fa-circle-play fa-3x"></i> Deployed App
                            </a>  
                        </div>  
                    </div>
                </div>

                <div className="col project">
                    <div  className="card bg-dark text-white ratio ratio-16x9 border border-3 border-dark rounded p-4">
                    <img src={Surf} className="card-img" alt="Surf project"></img>
                        <div className="card-img-overlay">
                            <h3 className="card-title">no name</h3>
                            <p className="card-text">HTML/CSS</p>
                            <button className="stretched-link opacity-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNN" aria-expanded="false" aria-controls="collapseNN">
                            </button>
                        </div> 
                    </div> 
                    <div className='collapse' id="collapseNN">
                        <div className='d-flex justify-content-evenly'>
                            <a className='link-dark m-2' href='https://github.com/haleytelega/Book-Beans' rel='noreferrer' target="_blank">
                                <i className="fa-brands fa-github fa-3x"></i> Github Repo
                            </a>
                            <a className='link-dark m-2' href='https://morningsol.github.io/run-buddy/' rel='noreferrer' target="_blank">
                                <i className="fa-regular fa-circle-play fa-3x"></i> Deployed App
                            </a>   
                        </div>
                    </div>
                </div>     
                
                <div className="col project">
                    <div  className="card bg-dark text-white ratio ratio-16x9 border border-3 border-dark rounded p-4">
                    <img src={Surf} className="card-img" alt="Surf project"></img>
                        <div className="card-img-overlay">
                            <h3 className="card-title">no name</h3>
                            <p className="card-text">HTML/CSS</p>
                            <button className="stretched-link opacity-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNN" aria-expanded="false" aria-controls="collapseNN">
                            </button>
                        </div> 
                    </div> 
                    <div className='collapse' id="collapseNN">
                        <div className='d-flex justify-content-evenly'>
                            <a className='link-dark m-2' href='https://github.com/haleytelega/Book-Beans' rel='noreferrer' target="_blank">
                                <i className="fa-brands fa-github fa-3x"></i> Github Repo
                            </a>
                            <a className='link-dark m-2' href='https://morningsol.github.io/run-buddy/' rel='noreferrer' target="_blank">
                                <i className="fa-regular fa-circle-play fa-3x"></i> Deployed App
                            </a>   
                        </div>
                    </div>
                </div>     

                <div className="col project">
                    <div  className="card bg-dark text-white ratio ratio-16x9 border border-3 border-dark rounded p-4">
                    <img src={Surf} className="card-img" alt="Surf project"></img>
                        <div className="card-img-overlay">
                            <h3 className="card-title">no name</h3>
                            <p className="card-text">HTML/CSS</p>
                            <button className="stretched-link opacity-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNN" aria-expanded="false" aria-controls="collapseNN">
                            </button>
                        </div> 
                    </div> 

                    <div className='collapse' id="collapseNN">
                        <div className='d-flex justify-content-evenly'>
                            <a className='link-dark m-2' href='https://github.com/haleytelega/Book-Beans' rel='noreferrer' target="_blank">
                                <i className="fa-brands fa-github fa-3x"></i> Github Repo
                            </a>
                            <a className='link-dark m-2' href='https://morningsol.github.io/run-buddy/' rel='noreferrer' target="_blank">
                                <i className="fa-regular fa-circle-play fa-3x"></i> Deployed App
                            </a>   
                        </div>
                    </div>
                </div>     

            </div>
        </section>
    );
}

export default Project;


