import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
  return (
    <div>
      <header>
        <Navbar expand="lg" bg="dark" variant='dark' >
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>ProductHub</Navbar.Brand>
          </LinkContainer>
                
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" />
          </Navbar.Collapse>
        </Container>
        </Navbar>
      </header>
    </div>
  )
}

export default Header
