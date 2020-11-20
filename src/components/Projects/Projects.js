import React, { useEffect, useContext } from 'react'
import Container from 'react-bootstrap/Container'
import axios from 'axios'

import ProjectsContext from './ProjectsContext'
import ListProjects from './ListProjects'

const Projects = () => {
	const { projects, setProjects } = useContext(ProjectsContext)

	// GET Projects
	useEffect(() => {
		const url = `http://localhost:8000/api/projects/`
		axios
			.get(url)
			.then((res) => setProjects(res.data))
			.catch(console.error)
	}, [])

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
