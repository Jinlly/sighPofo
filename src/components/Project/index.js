import React, { useState } from "react";
import Card from "react-bootstrap/Card";

function Project(props) {
	// This imports the information for the current project sent down.
	const currentProject = useState(props)[0].projects;

	const name = currentProject.name;
	const description = currentProject.description;
	//this part is bugging const image = currentProject.image;
	const appLink = currentProject.deployed;

	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img
				variant="top"
				//this part is bugging
				className="card-image"
			/>
			<div className="center">
				<Card.Body>
					<Card.Title className="card-title">{name}</Card.Title>
					<Card.Text className="card-text">{description}</Card.Text>
					<Card.Link href={appLink} target="_blank" className="card-link">
						{name} App
					</Card.Link>
					<br></br>
				</Card.Body>
			</div>
		</Card>
	);
}

export default Project;
