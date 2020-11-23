import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import ProjectsContext from '../Projects/ProjectsContext'
import Header from '../Header/Header'
import Projects from '../Projects/Projects'
import Project from '../Projects/Project'
import CreateProject from '../Projects/CreateProject'
import UpdateProject from '../Projects/UpdateProject'
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
				<Route exact path='/projects/:id' component={Project} />
				<Route path='/create-project' component={CreateProject} />
				<Route
					path='/projects/:id/update-project'
					render={(routerProps) => <UpdateProject match={routerProps.match} />}
				/>
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
