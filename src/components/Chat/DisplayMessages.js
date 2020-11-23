import React from 'react'

import ScrollToBottom from 'react-scroll-to-bottom'

const DisplayMessages = ({ name, messages }) => {
	// console.log(messages)
	if (messages.length > 1) {
		return (
			<div className='displayMessages'>
				<ScrollToBottom>
					{messages.map(({ user, message }, index) => (
						<div key={index}>
							{user}
							{message}
						</div>
					))}
				</ScrollToBottom>
				<h3>Blah Blah Blah 333</h3>
			</div>
		)
	}
	return <div className='displayMessages'>{messages[0]}</div>
}

export default DisplayMessages
