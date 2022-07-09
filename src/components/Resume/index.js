import React from 'react';
import MyResume from '../../assets/resume.pdf';


function Resume() {
    return (
        <div className=''>
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
                <a href={MyResume} download="Resume-Patrick">Resume Download</a>
        </div>
        

        
    );
}

export default Resume;