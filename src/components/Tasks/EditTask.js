import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import ENDPOINT from '../../config/config'

const EditTask = ({ task, setRefresh, setShowEdit }) => {
	const [description, setDescription] = useState(task.description)

	const handleSubmit = (event) => {
		event.preventDefault()

		const url = `${ENDPOINT}/api/tasks/${task._id}`
		axios.patch(url, { description }).then(() => {
			setRefresh(true)
			setShowEdit(false)
		})
	}

	return (
		<Container>
			<Form onSubmit={handleSubmit}>
				<Form.Group>
					<Form.Label>Task</Form.Label>
					<Form.Control
						type='text'
						id='task'
						value={description}
						onChange={(event) => setDescription(event.target.value)}
					/>
				</Form.Group>
				<Button variant='primary' type='submit' block>
					Submit
				</Button>
			</Form>
		</Container>
	)
}

export default EditTask
