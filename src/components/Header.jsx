import React from 'react'; 
import { Navbar, Nav } from 'react-bootstrap'; 
import Logo from "../resources/logo-prod.png";
import { Outlet } from 'react-router-dom';
// import "../components/css/header.css"; // Asegúrate de importar tu archivo CSS
function Header() { 

	return ( <div>
		<Navbar bg="dark" expand="lg"
				variant="dark"
				className="container-fluid">
			<Navbar.Brand href="/"> 
				<img src={Logo} 
					width="auto" height="50vh"
					alt="Logo" /> 
			</Navbar.Brand> 
			<Navbar.Toggle 
				aria-controls="basic-navbar-nav" /> 
			<Navbar.Collapse 
				id="basic-navbar-nav"> 
				<Nav className="ml-auto"> 
					<Nav.Link href="explora"> 
						Explora 
					</Nav.Link> 
					<Nav.Link href="info"> 
						Información
					</Nav.Link> 
					<Nav.Link href="personas"> 
						Personas
					</Nav.Link> 
				</Nav> 
			</Navbar.Collapse> 
		</Navbar>
		<hr/>
		<Outlet></Outlet>
		</div> 
	); 
} 

export default Header;
