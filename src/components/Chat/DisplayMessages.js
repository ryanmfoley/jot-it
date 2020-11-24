import React from 'react'

import ScrollToBottom from 'react-scroll-to-bottom'

const DisplayMessages = ({ name, messages }) => {
	if (messages.length) {
		return (
			<div className='display-messages'>
				<ScrollToBottom>
					{messages.map(({ user, text }, index) => {
						if (name === user) {
							return (
								<div key={index} className='outgoing-message'>
									<div className='sender'>
										<p>{user}</p>
									</div>
									<div className='message-text'>
										<p>{text}</p>
									</div>
								</div>
							)
						} else {
							return (
								<div key={index} className='incoming-message'>
									<div className='message-text'>
										<p>{text}</p>
									</div>
									<div className='sender'>
										<p>{user}</p>
									</div>
								</div>
							)
						}
					})}
				</ScrollToBottom>
			</div>
		)
	}
	return <></>
}

export default DisplayMessages
