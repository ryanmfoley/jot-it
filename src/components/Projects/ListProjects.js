import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Jumbotron from 'react-bootstrap/Jumbotron'
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import ProjectsContext from './ProjectsContext'
import ProjectIdContext from './ProjectIdContext'

const ListProjects = () => {
	const [deleteProject, setDeleteProject] = useState('')
	const { projects, setProjects } = useContext(ProjectsContext)
	const { projectId, setProjectId } = useContext(ProjectIdContext)

	useEffect(() => {
		const handleDelete = () => {
			if (deleteProject) {
				const url = `http://localhost:8000/api/projects/${deleteProject}`
				axios.delete(url).then((res) => {
					setProjects(
						projects.filter((project) => project._id !== deleteProject)
					)
					setDeleteProject('')
				})
			}
		}
		handleDelete()
	}, [deleteProject])

	if (!projects.length) {
		return <h5>Loading...</h5>
	}
	return (
		<Jumbotron>
			<Card.Body>
				{projects.map((project) => (
					<div key={project._id}>
						<Card>
						<div className='project' onClick={() => {
							setProjectId(project._id)
							// console.log(project._id)
							}}>
							<h2>{project.title}</h2>
							<p>{project.description}</p>
							<p>{project.tasks}</p>
							<p>{project.links}</p>
							<p>{project.dueDate}</p>
							</div>
							<Button
								variant='outline-danger'
								onClick={() => {
									setDeleteProject(project._id)
								}}>
								Delete
							</Button>
						</Card>
					</div>
				))}
			</Card.Body>
		</Jumbotron>
	)
}

export default ListProjects
