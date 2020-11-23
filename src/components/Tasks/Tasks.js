import React from 'react'

import Task from './Task'

const Tasks = ({ tasks, setRefresh }) => {
	return (
		<ul>
			{tasks.map((task) => (
				<Task key={task._id} task={task} setRefresh={setRefresh} />
			))}
		</ul>
	)
}

<<<<<<< HEAD
export default Task;
=======
export default Tasks
>>>>>>> dev
