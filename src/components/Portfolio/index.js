import React from 'react';
import Project from '../Project';

function Portfolio() {
	const projects = [
		{
			name: 'Weather Tracker',
			description:
				'An app to tell the weather of your city',
			image: '',
			deployed: 'https://jinlly.github.io/weather-dash/',
		},
		{
			name: 'Password gene',
			description:
				'An app to create a random password',
			image: '',
			deployed: 'https://jinlly.github.io/password-generator/',
		},
		{
			name: 'Note taker',
			description:
				'An app to take notes',
			image: '',
			deployed: 'https://note-taker-supreme.herokuapp.com/',
		},
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">projects</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;
