import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

import ProjectsContext from './ProjectsContext'

const CreateProject = () => {
	const { projects, setProjects } = useContext(ProjectsContext)

	const handleCreate = (event) => {
		event.preventDefault()

		const url = 'http://localhost:8000/api/projects'

		const data = {
			title: event.target.title.value,
			description: event.target.description.value,
			dueDate: event.target.date.value,
		}

		const clearForm = () => {
			event.target.title.value = ''
			event.target.description.value = ''
			event.target.date.value = ''
		}

		axios
			.post(url, data)
			.then((res) => setProjects([...projects, res.data]))
			.then((res) => clearForm())
	}

	return (
		<div>
			<Container>
				<Form
					action='http://localhost:8000/api/projects/'
					onSubmit={handleCreate}>
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
						<Form.Label>Due Date</Form.Label>
						<Form.Control
							type='date'
							id='date'
							placeholder='Due Date'
							required={true}
						/>
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
