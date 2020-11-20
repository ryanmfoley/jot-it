import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'
import ENDPOINT from '../../config/config'

import Messages from './Messages'

let socket

const Chat = ({ match }) => {
	const [name, setName] = useState('')
	const [room, setRoom] = useState('')
	const [message, setMessage] = useState('')
	const [messages, setMessages] = useState('')
	const ENDPOINT2 = 'localhost:8000'

	useEffect(() => {
		setName(match.params.name)
		setRoom(match.params.room)
		console.log(name, room)

		// socket = io(ENDPOINT)
		socket = io(ENDPOINT2)

		// Send name and room to server
		socket.emit('join', { name, room })

		// return () => {
		// 	socket.emit('disconnect')

		// 	socket.off()
		// }
	}, [name, room])

	// useEffect for handling messages
	useEffect(() => {
		// Listen for message socket events
		socket.on('message', (message) => {
			setMessages([...messages, message])
		})
	}, [messages])

	return (
		<div className='chatContainer'>
			<Messages name={name} messages={messages} />
		</div>
	)
}

export default Chat
