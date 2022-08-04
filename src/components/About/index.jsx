import React from 'react';
import Avatar from '../../assets/img/avatar.png'

function About() {
    return (
        <section className="card m-2 m-sm-5 border border-3 border-dark rounded-5 p-4 shadow-lg d-flex">
            <div className="row">
                <div className="col-12 col-sm-4">
                    <img src={Avatar} className="img-fluid rounded-5" alt="..."/> 
                </div>
                <div className="col-12 col-md-7">
                    <div className="card-body pb-0">
                        <h5 className="card-title">About Me</h5> 
                        <p>
                        I'm a Full Stack Web Developer with a Cardiology Technologist background.  
                        I’ve received a certificate for completing the Carleton university, 24 week, web developer bootcamp.  
                        Working in medical diagnostic testing for a decade has given me high level skills in adaptability, critical thinking, problem solving, analysing/interpreting data, precision quality work and a perpetual learning mindset.
                        My experience with programming pacemakers has given me an appreciation for algorithms and parameter settings.  
                        In my latest project, I was the bridge between back-end and front-end.  
                        My teammates would often come to me and trust me to solve problems on both ends.  
                        I’m skilled in JavaScript, HTML/CSS, ReactJS, NodeJS, MySQL, MongoDB, etc.  
                        JavaScript code definitely fascinates me.  It engages me in learning new and more efficient ways of coding and solving problems.  
                        I’m eager to leverage and develop my skills as part of a quality-driven team to build better web experiences.  
                        </p>  
                    </div>
                </div>
            </div>
        </section>
    );
}
  
  export default About;

