import React from 'react'

import ScrollToBottom from 'react-scroll-to-bottom'

const DisplayMessages = ({ name, messages }) => {
	// console.log('name', name, messages)
	if (messages.length) {
		return (
			<div className='display-messages'>
				<ScrollToBottom>
					{messages.map(({ user, text }, index) => (
						<div key={index}>
							{user}
							{text}
						</div>
					))}
				</ScrollToBottom>
			</div>
		)
	}
	return <></>
}

export default DisplayMessages
