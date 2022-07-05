import React from 'react';
import Concertium from '../../assets/img/Concertium.jpg';
import BookBeans from '../../assets/img/logo.jpeg';
import Run from '../../assets/img/hero-bg.jpg';
import Surf from '../../assets/img/rafael-leao.jpg';

function Project() {
    return (
        <section className="m-5 mt-3">
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card bg-dark text-white">
                        <img src={Concertium} className="card-img" alt="Concertium project"></img>
                        <div className="card-img-overlay">
                            <h5 className="card-title">Concertium</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text">Last updated 3 mins ago</p>
                        </div>
                    </div> 
                </div>

                <div className="col">
                    <div className="card bg-dark text-dark">
                        <img src={BookBeans} className="card-img" alt="Books and Beans project"></img>
                        <div className="card-img-overlay">
                            <h5 className="card-title">Concertium</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text">Last updated 3 mins ago</p>
                        </div>
                    </div> 
                </div>

                <div className="col">
                    <div className="card bg-dark text-white">
                        <img src={Run} className="card-img" alt="Run project"></img>
                        <div className="card-img-overlay">
                            <h5 className="card-title">Concertium</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text">Last updated 3 mins ago</p>
                        </div>
                    </div> 
                </div>

                <div className="col">
                    <div className="card bg-dark text-white">
                        <img src={Surf} className="card-img" alt="Surf project"></img>
                        <div className="card-img-overlay">
                            <h5 className="card-title">Concertium</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text">Last updated 3 mins ago</p>
                        </div>
                    </div> 
                </div>
                
        </div>
       </section>
    );
}

export default Project;


