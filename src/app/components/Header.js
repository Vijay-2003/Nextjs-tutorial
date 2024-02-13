'use client'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link'

const Header = () => {
    return (
        <Navbar data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>
                    <Link className='nav-link' href="/">Next App</Link>
                    {/* Next App */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className='nav-link' href="/">Home</Link>
                        <Link className='nav-link' href="/about">About</Link>
                        <Link className='nav-link' href="/services">Services</Link>
                        <Link className='nav-link' href="/products">OurProducts</Link>
                        <Link className='nav-link' href="/quotes">Quotes</Link>
                        <Link className='nav-link' href="/blog">Blog</Link>
                        <Link className='nav-link' href="/contact">Contact</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header