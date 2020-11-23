import React from 'react'

const UsersInRoom = ({ room, usersInRoom }) => {
	// console.log(usersInRoom)

	if (usersInRoom.length > 1) {
		return (
			<div className='chatSideBar'>
				<h4>Room: {room}</h4>
				<ul className='usersInRoom'>
					{usersInRoom.map((user, index) => (
						<li key={index}>{user.name}</li>
					))}
				</ul>
			</div>
		)
	} else if (usersInRoom.length) {
		return (
			<div className='chatSideBar'>
				<ul>
					<li>{usersInRoom[0].name}</li>
				</ul>
			</div>
		)
	} else {
		return <div className='chatSideBar'></div>
	}
}

export default UsersInRoom
