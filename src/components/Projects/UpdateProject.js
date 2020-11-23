import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import ENDPOINT from '../../config/config'

const UpdateProject = ({ match }) => {
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [dueDate, setDueDate] = useState('')

	useEffect(() => {
		const url = `${ENDPOINT}/api/projects/${match.params.id}`

		axios
			.get(url)
			.then((json) => {
				const date = new Date(json.data.dueDate)
				setTitle(json.data.title)
				setDescription(json.data.description)
				setDueDate(date.toISOString().slice(0, 10))
			})
			.catch(console.error)
	}, [])

	const handleUpdate = (event) => {
		event.preventDefault()

		const url = `${ENDPOINT}/api/projects/${match.params.id}`

		const data = { title, description, dueDate }

		axios
			.patch(url, data)
			.then((res) => console.log(res.data))
			.catch(console.error)
	}

	return (
		<div>
			<Container>
				<Card.Body>
					<div>
						<Card>
							<Form onSubmit={handleUpdate}>
								<Form.Group>
									<Form.Label>Project</Form.Label>
									<Form.Control
										type='text'
										id='title'
										value={title}
										onChange={(event) => setTitle(event.target.value)}
									/>
								</Form.Group>
								<Form.Group>
									<Form.Label>Project Description</Form.Label>
									<Form.Control
										as='textarea'
										id='description'
										rows={3}
										value={description}
										onChange={(event) => setDescription(event.target.value)}
									/>
								</Form.Group>
								<Form.Group>
									<Form.Label>Due Date</Form.Label>
									<Form.Control
										type='date'
										id='date'
										value={dueDate}
										onChange={(event) => setDueDate(event.target.value)}
									/>
								</Form.Group>
								<Button variant='primary' type='submit' block>
									Submit
								</Button>
							</Form>
						</Card>
					</div>
				</Card.Body>
			</Container>
		</div>
	)
}

export default UpdateProject
