import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Header = () => {
	return (
		<Navbar collapseOnSelect expand='md'>
			<Navbar.Brand as={Link} to='/'>
				<h3>JotIt</h3>
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
							Chatroom
						</Nav.Link>
						<Nav.Link as={Link} to='/'>
							Quotes
						</Nav.Link>
						<Nav.Link as={Link} to='/'>
							Contact Us
						</Nav.Link>
						<Nav.Link as={Link} to='/'>
							About
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar.Brand>
		</Navbar>
	)
}

export default Header
