import React from "react";

function Resume() {
	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Resume</h1>
			</div>
			<div className="bottom-spacing">
				<a href={require("../../assets/files/Jin's Resume.pdf")} download>
					<h4>Download My resume if U want....</h4>
				</a>
			</div>
			<div>
				<h5>A side from my previous exps..</h5>
				<h6>I have learned to..</h6>
				<ol>
					<h7>Front:</h7>
					<li>HTML</li>
					<li>CSS</li>
					<li>JavaScript</li>
				</ol>
				<br></br>
				<h7>Back:</h7>
				<ol>
					<li>NodeJS</li>
					<li>Express</li>
					<li>React</li>
				</ol>
				<h7>Database:</h7>
				<ol>
					<li>MySQL</li>
					<li>Sequelize</li>
					<li>NoSQL</li>
					<li>SQLite</li>
					<li>MongoDB and Mongoose</li>
				</ol>
			</div>
		</section>
	);
}

export default Resume;
