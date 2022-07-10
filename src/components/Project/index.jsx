import React from 'react';
import Concertium from '../../assets/img/Concertium.jpg';
import BookBeans from '../../assets/img/bookcoffee.jpg';
import RunBuddy from '../../assets/img/hero-bg.jpg';
import BudgetTracker from '../../assets/img/calculator.jpg';
import PhotoPort from '../../assets/img/rafael-leao.jpg';
import DeepThoughts from '../../assets/img/pawel-czerwinski-8uZPynIu-rQ-unsplash.jpg'

function Project() {
    return (
        <section className="m-5">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                <div className="col project">
                    <div className="card bg-dark ratio ratio-16x9 border border-3 border-dark rounded p-4">
                        <img src={Concertium} className="card-img" alt="Concertium project"></img>
                        <div className="card-img-overlay">
                            <h3 className="card-title text-shadow">Concertium</h3>
                            <p className="card-text text-shadow">Javascript/HTML/CSS Bulma</p>
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
                    <div className="card bg-dark ratio ratio-16x9 border border-3 border-dark rounded p-4">
                        <img src={BookBeans} className="card-img" alt="Books and Beans project"></img>
                        <div className="card-img-overlay">
                            <h3 className="card-title text-shadow">Books and Beans</h3>
                            <p className="card-text text-shadow">JS/CSS Bootstrap/Node/Bcrypt/Mysql2<br/>Sequelize/Express(Session/Handlebars)</p>
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
                    <div  className="card bg-dark ratio ratio-16x9 border border-3 border-dark rounded p-4">
                        <img src={RunBuddy} className="card-img" alt="Run Buddy project"></img>
                        <div className="card-img-overlay">
                            <h3 className="card-title text-shadow">Run Buddy</h3>
                            <p className="card-text text-shadow">HTML/CSS</p>
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
                    <div  className="card bg-dark ratio ratio-16x9 border border-3 border-dark rounded p-4">
                    <img src={BudgetTracker} className="card-img" alt="budget Tracker project"></img>
                        <div className="card-img-overlay">
                            <h3 className="card-title text-shadow">Budget Tracker</h3>
                            <p className="card-text text-shadow">IndexedDB/PWA/Manifest</p>
                            <button className="stretched-link opacity-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBT" aria-expanded="false" aria-controls="collapseBT">
                            </button>
                        </div> 
                    </div> 
                    <div className='collapse' id="collapseBT">
                        <div className='d-flex justify-content-evenly'>
                            <a className='link-dark m-2' href='https://github.com/MorningSol/pwa-budget-tracker' rel='noreferrer' target="_blank">
                                <i className="fa-brands fa-github fa-3x"></i> Github Repo
                            </a>
                            <a className='link-dark m-2' href='https://immense-basin-46853.herokuapp.com/' rel='noreferrer' target="_blank">
                                <i className="fa-regular fa-circle-play fa-3x"></i> Deployed App
                            </a>   
                        </div>
                    </div>
                </div>     
                
                <div className="col project">
                    <div  className="card bg-dark ratio ratio-16x9 border border-3 border-dark rounded p-4">
                    <img src={PhotoPort} className="card-img" alt="Photography Porfolio project"></img>
                        <div className="card-img-overlay">
                            <h3 className="card-title text-shadow">Photograpy Portfolio</h3>
                            <p className="card-text text-shadow">REACT</p>
                            <button className="stretched-link opacity-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePP" aria-expanded="false" aria-controls="collapsePP">
                            </button>
                        </div> 
                    </div> 
                    <div className='collapse' id="collapsePP">
                        <div className='d-flex justify-content-evenly'>
                            <a className='link-dark m-2' href='https://github.com/MorningSol/photo-port' rel='noreferrer' target="_blank">
                                <i className="fa-brands fa-github fa-3x"></i> Github Repo
                            </a>
                            <a className='link-dark m-2' href='https://morningsol.github.io/photo-port/' rel='noreferrer' target="_blank">
                                <i className="fa-regular fa-circle-play fa-3x"></i> Deployed App
                            </a>   
                        </div>
                    </div>
                </div>     

                <div className="col project">
                    <div  className="card bg-dark ratio ratio-16x9 border border-3 border-dark rounded p-4">
                    <img src={DeepThoughts} className="card-img" alt="Deep Thoughts project"></img>
                        <div className="card-img-overlay ">
                            <h3 className="card-title text-shadow">Deep Thoughts</h3>
                            <p className="card-text text-shadow">MERN</p>
                            <button className="stretched-link opacity-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDT" aria-expanded="false" aria-controls="collapseDT">
                            </button>
                        </div> 
                    </div> 

                    <div className='collapse' id="collapseDT">
                        <div className='d-flex justify-content-evenly'>
                            <a className='link-dark m-2' href='https://github.com/MorningSol/deep-thoughts' rel='noreferrer' target="_blank">
                                <i className="fa-brands fa-github fa-3x"></i> Github Repo
                            </a>
                            <a className='link-dark m-2' href='https://guarded-plateau-85591.herokuapp.com/' rel='noreferrer' target="_blank">
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


