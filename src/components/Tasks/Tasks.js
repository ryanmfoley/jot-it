import React from 'react'

import Task from './Task'
import './Tasks.css'

const Tasks = ({ tasks, setRefresh }) => (
	<ul className='tasks-list'>
		{tasks.map((task) => (
			<Task key={task._id} task={task} setRefresh={setRefresh} />
		))}
	</ul>
)

export default Tasks
