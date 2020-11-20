import React, { useState, useContext } from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import axios from 'axios'

import ProjectsContext from './ProjectsContext'

const CreateProject = () => {
	const { projects, setProjects } = useContext(ProjectsContext)
	const { newProject, setNewProject} = useState('')
	const { newProjectTasks, setNewProjectTasks} = useState([])

	const handleCreate = (event) => {
		event.preventDefault()

		const url = 'http://localhost:8000/api/projects'

		let taskArray = []
		let task1 = {
			completed: false,
			description: event.target.task1.value
		}

		let task2 = {
			completed: false,
			description: event.target.task2.value
		}

		let task3 = {
			completed: false,
			description: event.target.task3.value
		}

		taskArray.push(task1)
		taskArray.push(task2)
		taskArray.push(task3)
		// console.log(taskArray)

		const data = {
			title: event.target.title.value,
			description: event.target.description.value,
			dueDate: event.target.date.value,
			tasks: taskArray,
		}

		const clearForm = () => {
			event.target.title.value = ''
			event.target.description.value = ''
			event.target.date.value = ''
			event.target.task1.value= ''
			event.target.task2.value= ''
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
						<Form.Label>Task One</Form.Label>
						<Form.Control
							type='text'
							id='task1'
							rows={1}
							required={false}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Task Two</Form.Label>
						<Form.Control
							type='text'
							id='task2'
							rows={1}
							required={false}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Task Three</Form.Label>
						<Form.Control
							type='text'
							id='task3'
							rows={1}
							required={false}
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