import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Outlet, Link } from "react-router-dom";

import './App.css';
import logo from './logo.svg';

function PageHeader() {
  return (
    <div>
    <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/AboutUs">AboutUs</Link>
          </li>
          <li>
            <Link to="/Facilities">Facilities</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid style={{
          backgroundColor: 'Teal', color:'White'
        }}>
        <Navbar.Brand href="" style={{color: '#33CEFF'}}>
            <img alt="" src={logo} width="60"  className="App-logo"  />{' '}
            <b>SciPlanet</b>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{color: 'White' }}>
          <Nav className="me-auto">
            <Nav.Link href="" style={{color: 'White'}}><Link to="/AboutUs">About Us</Link></Nav.Link>

            <NavDropdown title={ <span className="text-white my-auto">Explore</span> } id="basic-nav-dropdown">
              <NavDropdown.Item href="">Learn Experiments</NavDropdown.Item>
              <NavDropdown.Item href="">Sample Analysis</NavDropdown.Item>
              <NavDropdown.Item href="">Use Advanced Facilities</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title={ <span className="text-white my-auto">Avail Services</span> } id="basic-nav-dropdown">
              <NavDropdown.Item href=""><Link to="/Facilities">Learn Experiments</Link></NavDropdown.Item>
              <NavDropdown.Item href=""><Link to="/Facilities">Sample Analysis</Link></NavDropdown.Item>
              <NavDropdown.Item href=""><Link to="/Facilities">Use Advanced Facilities</Link></NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#link" style={{color: 'White'}}>Contact Us</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Button variant="primary"><Link to="/AboutUs">AboutUs</Link></Button>{' '}
    </div>
  );
}

export default PageHeader;