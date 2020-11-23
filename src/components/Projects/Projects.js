import React, { useEffect, useContext } from 'react'
import Container from 'react-bootstrap/Container'
import axios from 'axios'
import ENDPOINT from '../../config/config'

import ProjectsContext from './ProjectsContext'
import ListProjects from './ListProjects'

const Projects = () => {
	const { setProjects } = useContext(ProjectsContext)

	// GET Projects
	useEffect(() => {
		const url = `${ENDPOINT}/api/projects/`
		axios
			.get(url)
			.then((res) => setProjects(res.data))
			.catch(console.error)
	}, [])

	return (
		<>
			<div>
				<Container>
					<ListProjects />
				</Container>
			</div>
		</>
	)
}
export default Projects
