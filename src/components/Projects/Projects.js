import React, { useEffect, useContext } from 'react'
import Container from 'react-bootstrap/Container'
import axios from 'axios'

import ProjectsContext from './ProjectsContext'
import ListProjects from './ListProjects'
const Projects = () => {
<<<<<<< HEAD
	const { projects, setProjects } = useContext(ProjectsContext)
=======
	const { setProjects } = useContext(ProjectsContext)

>>>>>>> 909a10b... Join chatroom works
	// GET Projects
	useEffect(() => {
		const url = `https://shielded-scrubland-66990.herokuapp.com/api/projects/`
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
