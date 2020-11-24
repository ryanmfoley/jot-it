import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import './Header.css'

const Header = () => {
	return (
		<Navbar collapseOnSelect expand='md' className='header'>
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
