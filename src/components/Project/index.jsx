import React from 'react';
import Concertium from '../../assets/img/Concertium.jpg';
import BookBeans from '../../assets/img/bookcoffee.jpg';
import RunBuddy from '../../assets/img/hero-bg.jpg';
import Surf from '../../assets/img/rafael-leao.jpg';

function Project() {
    return (
        <section className="m-5 mt-3">
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card bg-dark text-white ratio ratio-16x9 border border-3 border-dark rounded p-4">
                        <img src={Concertium} className="card-img" alt="Concertium project"></img>
                        <div className="card-img-overlay">
                            <h5 className="card-title">Concertium</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> 
                        </div>
                    </div> 
                </div>

                <div className="col">
                    <div className="card bg-dark text-white ratio ratio-16x9 border border-3 border-dark rounded p-4">
                        <img src={BookBeans} className="card-img" alt="Books and Beans project"></img>
                        <div className="card-img-overlay">
                            <h5 className="card-title">Books and Beans</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>                      
                        </div>
                    </div> 
                </div>

                <div className="col">
                    <div className="card bg-dark text-white ratio ratio-16x9 border border-3 border-dark rounded p-4">
                        <img src={RunBuddy} className="card-img" alt="Run Buddy project"></img>
                        <div className="card-img-overlay">
                            <h5 className="card-title">Run Buddy</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div> 
                </div>

                <div className="col">
                    <div className="card bg-dark text-white ratio ratio-16x9 border border-3 border-dark rounded p-4">
                        <img src={Surf} className="card-img" alt="Surf project"></img>
                        <div className="card-img-overlay">
                            <h5 className="card-title">No Name</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div> 
                </div>
                
        </div>
       </section>
    );
}

export default Project;


