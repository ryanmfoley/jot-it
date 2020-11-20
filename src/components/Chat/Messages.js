import React from 'react'

const Messages = ({ name, messages }) => {
  

	return (
		<div>
			<h3>Name: </h3>
			<p>{name}</p>
			<h3>Messages: </h3>
			<p>{messages}</p>
		</div>
	)
}

export default Messages
