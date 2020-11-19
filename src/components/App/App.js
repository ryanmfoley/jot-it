import React, { useState } from 'react'
import { Route } from 'react-router-dom'

import ProjectsContext from '../Projects/ProjectsContext'
import ProjectContext from '../Projects/ProjectContext'
import ProjectIdContext from '../Projects/ProjectIdContext'
import TasksContext from '../Tasks/TasksContext'
import Header from '../Header/Header'
import Projects from '../Projects/Projects'
import Project from '../Projects/Project'
import CreateProject from '../Projects/CreateProject'
import UpdateProject from '../Projects/UpdateProject'


// import Task from './Task';
// import Quote from './Quote';
import './App.scss'

function App() {
	const [projects, setProjects] = useState([])
	const [project, setProject] =useState([])
	const [projectId, setProjectId] =useState([])
	const [tasks, setTasks] = useState([])

	return (
		<div>
			<ProjectsContext.Provider value={{ projects, setProjects }}>
			<ProjectContext.Provider value={{ project, setProject }}>
				<ProjectIdContext.Provider value={{ projectId, setProjectId }}>
				<TasksContext.Provider value={( tasks, setTasks)}>
				<Header />
				<Route path='/projects' exact component={Projects} />
				<Route path='/create-project' component={CreateProject} />
				<Route path='/projects/:id/update' component={UpdateProject} />
				<Route path='/projects/:id' component={Project} />
			</TasksContext.Provider>
			</ProjectIdContext.Provider>
			</ProjectContext.Provider>
			</ProjectsContext.Provider>
		</div>
	)
}

export default App
