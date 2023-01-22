import React from 'react'
import {Navbar, Container} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

function Header() {
  return (
    <header>
          <Navbar bg="light" expand="lg" collapseOnSelect>
            <Container>
            <LinkContainer to = "/">
                <Navbar.Brand>ZnajdzLekarza</Navbar.Brand>
              </LinkContainer>
              

              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                
              </Navbar.Collapse>
            </Container>
          </Navbar>
       
      </header>
  )
}

export default Header