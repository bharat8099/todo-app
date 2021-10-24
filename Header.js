import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

export const Header = (props) => {
    return (
    <>
    
        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
          <Nav className="me-auto">
            <Link  className="nav-link" to="/">Home</Link>
            <Link  className="nav-link" to="/todo">Todos</Link>
            <Link  className="nav-link" to="/about">About us</Link>
          
          </Nav>
          </Container>
        </Navbar>
        </>
        
      
    )

}
Header.defaultProps ={
    title: "your title Here",
}


