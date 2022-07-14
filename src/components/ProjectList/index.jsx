import React from 'react';



const projects = [
    {
        id: 'C',
        title: 'Concertium',
        tech: 'Javascript/HTML/CSS Bulma',
        github: 'https://github.com/MorningSol/concertium',
        deployed: 'https://morningsol.github.io/concertium/',
    
    },
    {
        id: 'BB',
        title: 'Books and Beans',
        tech: 'JS/CSS Bootstrap/Node/Bcrypt/Mysql2 Sequelize/Express(Session/Handlebars',
        github: 'https://github.com/haleytelega/Book-Beans',
        deployed: 'https://book-and-beans.herokuapp.com/',
    },
    {
        id: 'RB',
        title: 'Run Buddy',
        tech: 'HTML/CSS',
        github: 'https://github.com/MorningSol/run-buddy',
        deployed: 'https://morningsol.github.io/run-buddy/',
    },
    {
        id: 'BT',
        title: 'Budget Tracker',
        tech: 'IndexedDB/PWA/Manifest',
        github: 'https://github.com/MorningSol/pwa-budget-tracker',
        deployed: 'https://immense-basin-46853.herokuapp.com/',
    },
    {
        id: 'PP',
        title: 'Photograpy Portfolio',
        tech: 'REACT',
        github: 'https://github.com/MorningSol/photo-port',
        deployed: 'https://morningsol.github.io/photo-port/',
    },
    {
        id: 'DT',
        title: 'Deep Thoughts',
        tech: 'MERN',
        github: 'https://github.com/MorningSol/deep-thoughts',
        deployed: 'https://guarded-plateau-85591.herokuapp.com/',
    },
]


const ProjectList = () => {
    return (
        
        <section className="m-5">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {projects.map(({ id, title, tech, github,deployed }) => (
                    <div className="col project">
                        <div className="card bg-dark ratio ratio-16x9 border border-3 border-dark rounded p-4">
                            <img src={require(`../../assets/img/${id}.jpg`)} className="card-img" alt={title}></img>
                            <div className="card-img-overlay">
                                <h3 className="card-title text-shadow">{title}</h3>
                                <p className="card-text text-shadow">{tech}</p>
                                <button className="stretched-link opacity-0" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${id}`} aria-expanded="false" aria-controls={`collapse${id}`}>
                                </button> 
                            </div>
                        </div> 
                        <div className='collapse' id={`collapse${id}`} >
                            <div className='d-flex justify-content-evenly'>
                                <a className='link-dark m-2' href={github} rel='noreferrer' target="_blank">
                                    <i className="fa-brands fa-github fa-3x"></i> Github Repo
                                </a>
                                <a className='link-dark m-2' href={deployed} rel='noreferrer' target="_blank" >
                                    <i className="fa-regular fa-circle-play fa-3x"></i> Deployed App
                                </a>
                            </div>    
                        </div>
                    </div>
                ))} 
            </div>
        </section>
       
      )   
};

export default ProjectList;