import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import io from 'socket.io-client'
import ENDPOINT from '../../config/config'

import ChatHeader from './ChatHeader'
import UsersInRoom from './UsersInRoom'
import DisplayMessages from './DisplayMessages'
import './Chat.css'

let socket

const Chat = ({ match }) => {
	const [name, setName] = useState('')
	const [room, setRoom] = useState('')
	const [message, setMessage] = useState('')
	const [messages, setMessages] = useState([])
	const [usersInRoom, setUsersInRoom] = useState([])

	useEffect(() => {
		// socket = io(ENDPOINT)
		socket = io('http://localhost:8000')

		setName(match.params.name)
		setRoom(match.params.room)

		// if (name && room) {
		// if (match.params.name && match.params.room) {
		// Join chatroom
		socket.emit('joinRoom', { name, room })

		// Get room and users info
		socket.on('usersInRoom', ({ users }) => {
			setUsersInRoom(users)
		})

		// }
	}, [name, room])

	// useEffect(() => {
	// 	// Listen for message socket events
	// 	console.log('blah')
	// 	socket.on('chat-message', (text) => {
	// 		// setMessages((messages) => [...messages, { user, message }])
	// 	})

	// }, [usersInRoom])

	const handleSend = (event) => {
		event.preventDefault()

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
					<Button variant='primary' onClick={(event) => handleSend(event)}>
						Send
					</Button>
				</Form>
			</div>
		</Container>
	)
}

export default Chat
