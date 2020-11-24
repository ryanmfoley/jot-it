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

		if (name && room) {
			// Join chatroom
			socket.emit('joinRoom', { name, room })

			// Get room and users info
			socket.on('usersInRoom', ({ users }) => {
				setUsersInRoom(users)
			})

			socket.on('chat-message', (message) => {
				setMessages((messages) => [...messages, message])
			})
		}
	}, [name, room])

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
		<Container className='chat-container'>
			<ChatHeader leaveRoom={leaveRoom} />
			<UsersInRoom room={room} usersInRoom={usersInRoom} />
			<div className='blah'>
				<DisplayMessages name={name} messages={messages} />
			</div>
			<Form className='send-message'>
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
		</Container>
	)
}

export default Chat
