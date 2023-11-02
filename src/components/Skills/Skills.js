import React from 'react'
import './Skills.css'
import SoftSkill from './SoftSkill';
import Languages from './Languages';

function Skills() {
	const softSkills = [{
		skill: "Communication",
		rating: 90
	}, {
		skill: "Creativity",
		rating: 80
	}, {
		skill: "Team Work",
		rating: 95
	}, {
		skill: "Leadership",
		rating: 75
	}, {
		skill: "Problem Solving",
		rating: 90
	}, {
		skill: "Positive Attitude",
		rating: 80
	}]

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
					<div className='col-xl-7 mb-5'>
						<h3 className='subtitle mb-3'>Soft Skills</h3>
						<div className='page-content-certificates'>
							{softSkills.map((skill, index) =>
								<SoftSkill key={index} rating={skill.rating} skill={skill.skill} />
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Skills