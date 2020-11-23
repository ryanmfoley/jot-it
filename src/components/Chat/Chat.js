import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
// import Col from 'react-bootstrap/Col'
import io from 'socket.io-client'
import ENDPOINT from '../../config/config'
import queryString from 'query-string'

import ChatHeader from './ChatHeader'
import UsersInRoom from './UsersInRoom'
import DisplayMessages from './DisplayMessages'
import './Chat.css'

let socket

const Chat = ({ match, location }) => {
	const [name, setName] = useState('')
	const [room, setRoom] = useState('')
	const [message, setMessage] = useState('')
	const [messages, setMessages] = useState('')
	const [usersInRoom, setUsersInRoom] = useState([])

	useEffect(() => {
		socket = io(ENDPOINT)
		setName(match.params.name)
		setRoom(match.params.room)
		if (name && room) {
			// console.log('name room', name, room)

			// Join chatroom
			socket.emit('joinRoom', { name, room })

			// Get room and users info
			socket.on('usersInRoom', (users) => {
				setUsersInRoom(users)
				console.log(users)
			})
		}
	}, [name, room])

	// useEffect(() => {
	// 	// Listen for message socket events
	// 	socket.on('chat-message', (message) => {
	// 		setMessages([...messages, message])
	// 	})
	// }, [messages])

	const handleSend = (event) => {
		event.preventDefault()
		// console.log(`Message: ${message}`)

		if (message) {
			// Send message to server
			socket.emit('send-chat-message', message, () => setMessage(''))
		}
	}

	const leaveRoom = () => {
		socket.emit('user-disconnected')
	}

	return (
		<Container>
			<div className='chatContainer'>
				<ChatHeader leaveRoom={leaveRoom} />
				<UsersInRoom room={room} usersInRoom={usersInRoom} />
				<DisplayMessages name={name} messages={messages} />
				<Form className='sendMessage'>
					{/* <Form.Row> */}
					{/* <Col> */}
					<Form.Control
						type='text'
						id='message'
						placeholder='Send Message'
						value={message}
						onChange={(event) => setMessage(event.target.value)}
						onKeyPress={(event) =>
							event.key === 'Enter' ? handleSend(event) : null
						}
						required={true}
					/>
					{/* </Col> */}
					<Button variant='primary' onClick={(event) => handleSend(event)}>
						Send
					</Button>
					{/* </Form.Row> */}
				</Form>
			</div>
		</Container>
	)
}

export default Chat
