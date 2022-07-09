import React from 'react';
import MyResume from '../../assets/resume.pdf';


function Resume() {
    return (
		
        <div className='container mt-5'>
			<div className='row justify-content-center'>
				<div className='col-12 col-sm-3 m-3'>
					<h5>Back-End Proficiencies</h5>
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

				<div className='col-12 col-sm-3 m-3'>
					<h5>Front-End Proficiencies</h5>
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
				
				<div className='col-12 col-sm-3 m-3'>
					<a href={MyResume} download="Resume-Patrick"><i className="fa-solid fa-file-arrow-down fa-2x"></i> Download Resume</a>
				</div>

            </div>
        </div>
        

        
    );
}

export default Resume;