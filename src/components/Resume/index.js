import React from 'react';
import MyResume from '../../assets/resume.pdf';


function Resume() {
    return (
		
        <div className='container-fluid'>
			<div className='row justify-content-center m-5 shadow-lg py-5'>
				<div className='col-12 col-sm-4 mt-3'>
					<h4>Back-End Proficiencies</h4>
					<ul>
						<li>APIs</li>
						<li>NodeJS</li>
						<li>Express</li>
						<li>MySQL</li>
						<li>Sequelize</li>
						<li>MongoDB</li>
						<li>Mongoose</li>
						<li>REST</li>
						<li>GraphQL</li>
						<li>Progressive Web Applications (PWA)</li>
					</ul>
				</div>

				<div className='col-12 col-sm-4 mt-3'>
					<h4>Front-End Proficiencies</h4>
					<ul>
						<li>HTML</li>
						<li>CSS</li>
						<li>JavaScript</li>
						<li>jQuery</li>
						<li>responsive design</li>
						<li>React</li>
						<li>Bootstrap</li>	
					</ul>
				</div>
				
				<div className='col-12 col-sm-3 mb-5 align-self-center order-first order-sm-last text-center'>
					<a className='link-warning fs-4' href={MyResume} download="Resume-Patrick"><i className="fa-solid fa-file-arrow-down fa-2x"></i> Resume</a>
				</div>

            </div>
        </div>
        

        
    );
}

export default Resume;