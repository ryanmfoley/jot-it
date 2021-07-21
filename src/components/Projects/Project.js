import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import axios from 'axios'

import ENDPOINT from '../../config/config'
import Tasks from '../Tasks/Tasks'

const Project = ({ match }) => {
	const [project, setProject] = useState({})
	const [refresh, setRefresh] = useState(true)
	const url = `${ENDPOINT}/api/projects/${match.params.id}`

	useEffect(() => {
		if (refresh) {
			axios.get(url).then((json) => {
				setProject(json.data)
				setRefresh(false)
			})
		}
	}, [refresh])

	if (!Object.keys(project).length) {
		return <h2>Loading...</h2>
	}

	return (
		<Card className='project'>
			<Link to={`/projects/${project._id}/update-project`}>Update</Link>
			<Card.Title>
				<h2>{project.title}</h2>
			</Card.Title>
			<Card.Body>
				<p>{project.description}</p>
				<Tasks tasks={project.tasks} setRefresh={setRefresh} />
				<p>{project.links}</p>
				<p>{project.dueDate}</p>
			</Card.Body>
		</Card>
	)
}

export default Project
