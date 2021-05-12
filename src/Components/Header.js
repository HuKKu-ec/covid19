import React, { Component } from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import styleHeader from './Header.css'
export default class Header extends Component {
    render() {
        return (
            
 <Navbar bg="dark" variant="dark" className="md-12 navbar-default" >
    <Navbar.Brand href="India">COVID-19</Navbar.Brand>
    <Nav className="mr-auto">
      <Link to="India" className="nav-link">India</Link>
      <Link to="World" className="nav-link">World</Link>
      {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
    </Nav>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form> */}
  </Navbar>
           
        )
    }
}
