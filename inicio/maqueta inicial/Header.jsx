// Header.js
import React, { useState } from 'react'; // Asegúrate de que esto esté presente
import { Navbar, Nav, Offcanvas } from 'react-bootstrap';
import './Header.css'; // Si necesitas estilos adicionales

const Header = () => {
    const [show, setShow] = useState(false); // Estado para manejar la visibilidad del Offcanvas

    const handleClose = () => setShow(false); 
    const handleShow = () => setShow(true); // Función para mostrar el Offcanvas

    return (
        <>
            <Navbar className="navbar" expand={false}> {/* Cambiado a 'false' para mantener el Offcanvas */}
                <Navbar.Brand href="#home">AlmerTech <br /> Conexiones <br /> Colaborativas</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />
            </Navbar>

            <Offcanvas show={show} onHide={handleClose} placement="end" className="offcanvas">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Opciones</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="flex-column">
                        <Nav.Link href="#home">INICIO</Nav.Link>
                        <Nav.Link href="#about">ACERCA DE NOSOTROS</Nav.Link>
                        <Nav.Link href="#users">USUARIOS</Nav.Link>
                        <Nav.Link href="#products">PRODUCTOS</Nav.Link>
                        <Nav.Link href="#services">SERVICIOS</Nav.Link>
                        <Nav.Link href="#search">BUSCAR PRODUCTOS</Nav.Link>
                        <Nav.Link href="#testimonials">TESTIMONIOS</Nav.Link>
                        <Nav.Link href="#blog">BLOG</Nav.Link>
                        <Nav.Link href="#faq">PREGUNTAS FRECUENTES</Nav.Link>
                        <Nav.Link href="#privacy-policy">POLÍTICA DE PRIVACIDAD</Nav.Link>
                        <Nav.Link href="#terms">TÉRMINOS Y CONDICIONES</Nav.Link>
                        <Nav.Link href="#location">UBICACIÓN</Nav.Link>
                        <Nav.Link href="#contact">CONTACTO</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Header;
