import React, { useEffect, useContext } from 'react'
import Container from 'react-bootstrap/Container'
import axios from 'axios'
import ENDPOINT from '../../config/config'

import ProjectsContext from './ProjectsContext'
import ListProjects from './ListProjects'
const Projects = () => {
<<<<<<< HEAD
<<<<<<< HEAD
	const { projects, setProjects } = useContext(ProjectsContext)
=======
=======
>>>>>>> dev
	const { setProjects } = useContext(ProjectsContext)

>>>>>>> 909a10b... Join chatroom works
	// GET Projects
	useEffect(() => {
<<<<<<< HEAD
		const url = `https://shielded-scrubland-66990.herokuapp.com/api/projects/`
=======
		const url = `${ENDPOINT}/api/projects/`
>>>>>>> dev
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
