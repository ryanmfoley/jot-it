import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import axios from 'axios'

const Join = () => {
	const [name, setName] = useState('')
	const [room, setRoom] = useState('')
	const [projects, setProjects] = useState([])

	const handleJoin = (event) => {
		if (!name || !room) {
			event.preventDefault()
		}
	}

	// GET Projects
	useEffect(() => {
		const url = `http://localhost:8000/api/projects/`
		axios
			.get(url)
			.then((res) => setProjects(res.data))
			.catch(console.error)
	}, [])

	return (
		<div className='join-container'>
			<Container>
				<h1 className='header'>Join a Chatroom</h1>
				<Form onSubmit={handleJoin}>
					<Form.Group>
						<Form.Label>Name</Form.Label>
						<Form.Control
							type='text'
							id='name'
							placeholder='Enter your username'
							onChange={(event) => setName(event.target.value)}
							required={true}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Chatroom</Form.Label>
						<Form.Control
							as='select'
							onChange={(event) => setRoom(event.target.value)}
							custom>
							<option hidden=''>Project Chatroom</option>
							{projects.map((project) => (
								<option key={project._id}>{project.title}</option>
							))}
						</Form.Control>
					</Form.Group>
					<Link to={`/chat/${name}&${room}`} onClick={handleJoin}>
						<Button variant='primary' type='submit' block>
							Submit
						</Button>
					</Link>
				</Form>
			</Container>
		</div>
	)
}

export default Join
