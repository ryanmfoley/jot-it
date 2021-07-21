import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Jumbotron } from 'react-bootstrap'
import axios from 'axios'

import ENDPOINT from '../../config/config'
import ProjectsContext from './ProjectsContext'
import './ListProjects.css'

const ListProjects = () => {
	const [deleteProject, setDeleteProject] = useState('')
	const { projects, setProjects } = useContext(ProjectsContext)

	useEffect(() => {
		const handleDelete = () => {
			if (deleteProject) {
				const url = `${ENDPOINT}/api/projects/${deleteProject}`

				axios.delete(url).then((res) => {
					setProjects(
						projects.filter((project) => project._id !== deleteProject)
					)
					setDeleteProject('')
				})
			}
		}
		handleDelete()
	}, [projects, setProjects, deleteProject])

	if (!projects.length) {
		return <h5>Loading...</h5>
	}

	return (
		<Jumbotron className='projects-list'>
			{projects.map((project) => (
				<Card key={project._id} className='project-card'>
					<Link to={`projects/${project._id}`} className='project-link'>
						<Card.Title className='project-title'>
							<h2>{project.title}</h2>
						</Card.Title>
						<hr />
						<Card.Body>
							<p>{project.description}</p>
							<p>{project.dueDate.slice(0, 10)}</p>
						</Card.Body>
					</Link>
					<Button
						variant='outline-danger'
						onClick={() => {
							setDeleteProject(project._id)
						}}>
						Delete
					</Button>
				</Card>
			))}
		</Jumbotron>
	)
}

export default ListProjects
