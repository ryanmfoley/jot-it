import React from 'react'

const UsersInRoom = ({ room, usersInRoom = [] }) => {
	if (!usersInRoom.length) {
		return <div className='chat-sidebar'></div>
	}
	return (
		<div className='chat-sidebar'>
			<h5>Users in Room</h5>
			<hr />
			<ul>
				{usersInRoom.map((user, index) => (
					<li key={index}>{user.name}</li>
				))}
			</ul>
		</div>
	)
}

export default UsersInRoom
