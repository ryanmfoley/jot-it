import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'

const Header = () => {
	return (
		<Navbar
			collapseOnSelect
			className='mb-5'
			expand='md'
			bg='primary'
			variant='dark'>
			<Navbar.Brand as={Link} to='/'>
				<h3>JotIt</h3>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav>
					<Nav.Link as={Link} to='/create-project'>
						Create Project
					</Nav.Link>
					<Nav.Link as={Link} to='/projects'>
						Projects
					</Nav.Link>
					<Nav.Link as={Link} to='/chat'>
						Chat
					</Nav.Link>
					<Nav.Link as={Link} to='/'>
						Contact Us
					</Nav.Link>
					<Nav.Link as={Link} to='/'>
						About
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default Header
