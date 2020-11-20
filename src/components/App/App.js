import React, { useState } from 'react'
import { Route } from 'react-router-dom'

import ProjectsContext from '../Projects/ProjectsContext'
import Header from '../Header/Header'
import Projects from '../Projects/Projects'
import Project from '../Projects/Project'
import CreateProject from '../Projects/CreateProject'
// import Task from './Task';
// import Quote from './Quote';
import Chat from '../Chat/Chat'
import Join from '../Chat/Join'
import './App.scss'

function App() {
	const [projects, setProjects] = useState([])
	// const [task, setTask] = useState([])

	return (
		<div>
			<ProjectsContext.Provider value={{ projects, setProjects }}>
				<Header />
				<Route path='/projects' exact component={Projects} />
				<Route
					path='/projects/:id'
					render={(routerProps) => {
						return <Project match={routerProps.match} />
					}}
				/>
				<Route path='/create-project' component={CreateProject} />
				<Route path='/chat' exact component={Join} />
				<Route
					path='/chat/:name&:room'
					render={(routerProps) => <Chat match={routerProps.match} />}
				/>
			</ProjectsContext.Provider>
		</div>
	)
}

export default App
