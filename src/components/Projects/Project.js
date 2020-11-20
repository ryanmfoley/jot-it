import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Project = ({ match }) => {
	const [project, setProject] = useState({})

	useEffect(() => {
		const id = match.params.id
		const url = `http://localhost:8000/api/projects/${id}`

		axios.get(url).then((json) => setProject(json.data))
	}, [])

	if (!Object.keys(project).length) {
		return <h2>Loading...</h2>
	}

	return (
		<div>
			<Card.Body>
				<div key={project._id}>
					<Card>
						<div onClick={() => {}}>
							<h2>{project.title}</h2>
							<p>{project.description}</p>
							<p>{project.tasks}</p>
							<p>{project.links}</p>
							<p>{project.dueDate}</p>
						</div>
						{/* <Button
							variant='outline-danger'
							onClick={() => {
								setDeleteProject(project._id)
							}}>
							Delete
						</Button> */}
					</Card>
				</div>
			</Card.Body>
		</div>
	)
}

export default Project
