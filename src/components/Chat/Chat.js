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
		socket = io(ENDPOINT)

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

		socket.on('chat-message', ({ user, text }) => {
			console.log('chat-message', user, text)
			setMessages((messages) => [...messages, text])
			// setMessages([...messages, text])
		})

		// }
	}, [name, room])

	// useEffect(() => {
	// 	// Listen for message socket events
	// 	socket.on('chat-message', ({ user, text }) => {
	// 		setMessages((messages) => [...messages, text])
	// 	})
	// }, [message])

	const handleSend = (event) => {
		event.preventDefault()

		if (message) {
			// Send message to server
			// console.log('send message', message)
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
