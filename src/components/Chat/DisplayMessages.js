import React from 'react'

import ScrollToBottom from 'react-scroll-to-bottom'

const DisplayMessages = ({ name, messages }) => {
	// console.log('my messages', messages)
	messages.forEach((message) => console.log(message))
	if (messages.length > 1) {
		return (
			<div className='displayMessages'>
				<ScrollToBottom>
					{/* {messages.map(({ user, text }, index) => ( */}
					{messages.map((message, index) => (
						<div key={index}>
							{/* {user} */}
							{message}
						</div>
					))}
				</ScrollToBottom>
			</div>
		)
	}
	return <div className='displayMessages'>{messages[0]}</div>
}

export default DisplayMessages
