import React, { useEffect, useContext } from 'react'
import Container from 'react-bootstrap/Container'
import axios from 'axios'

import ProjectsContext from './ProjectsContext'
import ProjectContext from './ProjectContext'
import ListProjects from './ListProjects'
import Project from './Project'

const Projects = () => {
	const { projects, setProjects } = useContext(ProjectsContext)
	const { project, setProject} = useContext(ProjectContext)

	// GET Projects
	useEffect(() => {
		const url = `http://localhost:8000/api/projects`
		axios
			.get(url)
			.then((res) => setProjects(res.data))
			.catch(console.error)
	}, [])

	if (project){
		return <Project project={project} />
	} 
	return (
		<>
			<div>
				<Container>
					<ListProjects projects={projects} />
				</Container>
			</div>
		</>
	)
}
export default Projects
