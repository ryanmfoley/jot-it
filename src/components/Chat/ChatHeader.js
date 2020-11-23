import React from 'react'
import { Link } from 'react-router-dom'

const ChatHeader = ({ leaveRoom }) => {
	return (
		<div className='chatHeader'>
			<h3>ProjectChat</h3>
			<Link to='/chat'>
				<button onClick={leaveRoom}>Leave Room</button>
			</Link>
		</div>
	)
}

export default ChatHeader
