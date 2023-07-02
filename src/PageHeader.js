import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './App.css';
import logo from './logo.svg';

function PageHeader() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid style={{
          backgroundColor: 'Teal', color:'White'
        }}>
        <Navbar.Brand href="https://saad-rahman-warsi.github.io/sciplanet/" style={{color: '#33CEFF'}}>
            <img alt="" src={logo} width="60"  className="App-logo"  />{' '}
            <b>SciPlanet</b>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{color: 'White' }}>
          <Nav className="me-auto">
            <Nav.Link href="https://saad-rahman-warsi.github.io/sciplanet/AboutUs" style={{color: 'White'}}>About Us</Nav.Link>

            <NavDropdown title={ <span className="text-white my-auto">Explore</span> } id="basic-nav-dropdown">
              <NavDropdown.Item href="https://saad-rahman-warsi.github.io/sciplanet/Facilities">Learn Experiments</NavDropdown.Item>
              <NavDropdown.Item href="https://saad-rahman-warsi.github.io/sciplanet/Facilities">Sample Analysis</NavDropdown.Item>
              <NavDropdown.Item href="https://saad-rahman-warsi.github.io/sciplanet/Facilities">Use Advanced Facilities</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title={ <span className="text-white my-auto">Avail Services</span> } id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Learn Experiments</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Sample Analysis</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Use Advanced Facilities</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#link" style={{color: 'White'}}>Contact Us</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PageHeader;