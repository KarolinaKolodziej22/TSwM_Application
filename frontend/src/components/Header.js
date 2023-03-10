import React from 'react'
import {Navbar, Nav, Container, Row} from 'react-bootstrap'

function Header() {
  return (
    <header>
          <Navbar bg="light" expand="lg" collapseOnSelect>
            <Container>
              <Navbar.Brand href="/">ZnajdzLekarza</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/login"><i className="fas fa-user"></i>Login</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
       
      </header>
  )
}

export default Header