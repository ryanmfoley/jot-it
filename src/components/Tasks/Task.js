import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'

import EditTask from './EditTask'

const Task = ({ task, setRefresh }) => {
	const [showEdit, setShowEdit] = useState(false)

	return (
		<li>
			{!showEdit && (
				<p>
					{task.description}
					<Button type='button' onClick={() => setShowEdit(true)}>
						Edit
					</Button>
				</p>
			)}
			{showEdit && (
				<EditTask
					task={task}
					setRefresh={setRefresh}
					setShowEdit={setShowEdit}
				/>
			)}
		</li>
	)
}

export default Task
