import React from 'react'

const UsersInRoom = ({ room, usersInRoom }) => {
	// console.log('bloop', usersInRoom)

	if (usersInRoom.length > 1) {
		return (
			<div className='chat-sidebar'>
				<h5>Room Name:</h5>
				{/* <h5>{{ room }}</h5> */}
				<ul>
					{usersInRoom.map((user, index) => (
						<li key={index}>{user.name}</li>
					))}
				</ul>
			</div>
		)
	} else if (usersInRoom.length) {
		return (
			<div className='chat-sidebar'>
				<h5>Room Name:</h5>
				{/* <h5>{{ room }}</h5> */}
				<ul>{/* <li>{usersInRoom[0].name}</li> */}</ul>
			</div>
		)
	}
	// } else {
	return <div className='chat-sidebar'></div>
	// }
}

export default UsersInRoom
