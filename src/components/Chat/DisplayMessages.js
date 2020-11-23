import React from 'react'

import ScrollToBottom from 'react-scroll-to-bottom'

const DisplayMessages = ({ name, messages }) => {
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
			</div>
		)
	}
	return <div className='displayMessages'></div>
}

export default DisplayMessages
