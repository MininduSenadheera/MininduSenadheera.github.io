import React from 'react'
import './Skills.css'
import Languages from './Languages';

function Skills() {
	const languages = [{
		language: "Typescript",
		rating: 95
	}, {
		language: "MERN Stack (MongoDb, Express, React, Node)",
		rating: 95
	}, {
		language: "Python",
		rating: 85
	}, {
		language: "Java",
		rating: 80
	}, {
		language: "SQL",
		rating: 75
	}, {
		language: "R",
		rating: 50
	}, {
		language: "PHP",
		rating: 65
	}]

	return (
		<section id='skills' className="section">
			<div className='container' align="center">
				<div className='row'>
					<div className='col-xl-5 mb-5'>
						<h3 className='subtitle mb-4'>Programming Languages</h3>
						<div className='boxAbout'>
							{languages.map((language, index) => 
								<Languages key={index} rating={language.rating} language={language.language} />
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Skills