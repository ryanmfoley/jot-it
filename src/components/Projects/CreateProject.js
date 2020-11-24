import React, { useState, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import ENDPOINT from '../../config/config'

import ProjectsContext from './ProjectsContext'

const CreateProject = () => {
	const [redirect, setRedirect] = useState(false)
	const { projects, setProjects } = useContext(ProjectsContext)

	const handleCreate = (event) => {
		event.preventDefault()

		const taskArray = []

		const task1 = {
			completed: false,
			description: event.target.task1.value,
		}

		const task2 = {
			completed: false,
			description: event.target.task2.value,
		}

		const task3 = {
			completed: false,
			description: event.target.task3.value,
		}

		taskArray.push(task1)
		taskArray.push(task2)
		taskArray.push(task3)

		const data = {
			title: event.target.title.value,
			description: event.target.description.value,
			dueDate: event.target.date.value,
			// tasks: taskArray,
		}

		const clearForm = () => {
			event.target.title.value = ''
			event.target.description.value = ''
			event.target.date.value = ''
			event.target.task1.value = ''
			event.target.task2.value = ''
			event.target.task3.value = ''
		}

		const url = ENDPOINT + '/api/projects'
		axios
			.post(url, data)
			.then((res) => setProjects([...projects, res.data]))
			.then((res) => clearForm())
			.then((res) => setRedirect(true))
	}

	if (redirect) {
		return <Redirect to='/projects' />
	}

	return (
		<div>
			<Container>
				<Form onSubmit={handleCreate}>
					<Form.Group>
						<Form.Label>Project</Form.Label>
						<Form.Control
							type='text'
							id='title'
							placeholder='Enter Project Name'
							required={true}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Project Description</Form.Label>
						<Form.Control
							as='textarea'
							id='description'
							rows={3}
							required={true}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Task One</Form.Label>
						<Form.Control type='text' id='task1' rows={1} required={false} />
					</Form.Group>
					<Form.Group>
						<Form.Label>Task Two</Form.Label>
						<Form.Control type='text' id='task2' rows={1} required={false} />
					</Form.Group>
					<Form.Group>
						<Form.Label>Task Three</Form.Label>
						<Form.Control type='text' id='task3' rows={1} required={false} />
					</Form.Group>
					<Form.Group>
						<Form.Label>Due Date</Form.Label>
						<Form.Control type='date' id='date' placeholder='Due Date' />
					</Form.Group>
					<Button variant='primary' type='submit' block>
						Submit
					</Button>
				</Form>
			</Container>
		</div>
	)
}

export default CreateProject
