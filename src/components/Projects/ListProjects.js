import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import ProjectsContext from './ProjectsContext'

const ListProjects = () => {
	const [deleteProject, setDeleteProject] = useState('')
	const { projects, setProjects } = useContext(ProjectsContext)

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
					<Card key={project._id}>
						<Link to={`projects/${project._id}`}>
							<div onClick={() => {}}>
								<h2>{project.title}</h2>
								<p>{project.description}</p>
								{/* <p>{project.tasks}</p> */}
								<p>{project.links}</p>
								<p>{project.dueDate}</p>
							</div>
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
			</Card.Body>
		</Jumbotron>
	)
}

export default ListProjects
