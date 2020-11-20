import React, { useState } from 'react'
import { Route } from 'react-router-dom'

import ProjectsContext from '../Projects/ProjectsContext'
import Header from '../Header/Header'
import Projects from '../Projects/Projects'
import CreateProject from '../Projects/CreateProject'
import './App.scss'

function App() {
	const [projects, setProjects] = useState([])
	// const [task, setTask] = useState([])

	return (
		<div>
			<ProjectsContext.Provider value={{ projects, setProjects }}>
				<Header />
				<Route path='/projects' exact component={Projects} />
				<Route path='/create-project' component={CreateProject} />
			</ProjectsContext.Provider>
		</div>
	)
}

export default App
