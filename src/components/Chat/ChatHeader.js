import React from 'react'

const ChatHeader = ({ leaveRoom }) => {
	return (
		<div className='chatHeader'>
			<h3>ProjectChat</h3>
			<button onClick={leaveRoom}>Leave Room</button>
		</div>
	)
}

export default ChatHeader
