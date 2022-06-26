import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import logo from "./assets/logo.png";

const NavBar = () => {
	return (
		<>
			<Navbar expand="md" className="containerProject" sticky="top">
				<Container fluid>
					<Navbar.Brand href="#" className="title">
						<img src={logo} alt="logo" className="logo" />
						Dados y Meeples
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav className="ms-auto my-2 my-md-0" navbarScroll>
							<Nav.Link href="#inicio!">Inicio</Nav.Link>
							<Nav.Link href="#juegos!">Juegos</Nav.Link>
							<Nav.Link href="#contacto!">Contacto</Nav.Link>
						</Nav>
						<CartWidget />
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default NavBar;
