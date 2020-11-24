import React from 'react'
import Button from 'react-bootstrap/Button'

const ChatHeader = ({ leaveRoom }) => (
	<div className='chat-header'>
		<h3>ProjectChat</h3>
		<Button variant='secondary' onClick={leaveRoom}>
			<strong>Leave Room</strong>
		</Button>
	</div>
)

export default ChatHeader
