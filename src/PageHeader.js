import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
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
    </div>
  );
}

export default PageHeader;