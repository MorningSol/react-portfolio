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
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui nisi enim aspernatur inventore rerum magnam officiis reiciendis, atque molestiae unde quam, excepturi voluptatum sapiente suscipit reprehenderit modi mollitia nemo dicta!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur earum voluptatibus quam aliquam ad esse autem magni eum corrupti, repellendus fuga debitis reprehenderit sunt aperiam quae vitae ut inventore veniam!
                        </p>  
                    </div>
                </div>
            </div>
        </section>
    );
}
  
  export default About;

