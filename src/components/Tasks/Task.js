import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'

import EditTask from './EditTask'

const Task = ({ task, setRefresh }) => {
	const [showEdit, setShowEdit] = useState(false)

	return (
		<li>
			{!showEdit && (
				<div className='task'>
					<p>{task.description}</p>
					<Button
						variant='outline-danger'
						type='button'
						onClick={() => setShowEdit(true)}
						size='sm'>
						Edit
					</Button>
				</div>
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
