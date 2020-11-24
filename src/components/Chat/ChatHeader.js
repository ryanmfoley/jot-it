import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const ChatHeader = ({ leaveRoom }) => (
	<div className='chat-header'>
		<h3>ProjectChat</h3>
		<Link to='/chat'>
			<Button onClick={leaveRoom}>
				<strong>Leave Room</strong>
			</Button>
		</Link>
	</div>
)

export default ChatHeader
