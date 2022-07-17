import React from 'react';

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
				<img
					src={require('../../assets/images/Avt.jpg')}
					alt="about-me"
					className="photo"
				/>
			</div>
			<div>
				<p align="center">
					Never thought I could make it all the way here...And never thought of becoming a web app developer. Well... still happy to learn new stuff, I think I will use them in the journey that in comming, I guess?
				</p>
			</div>
		</section>
	);
}

export default About;
