import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Container, Navbar, Nav } from 'react-bootstrap'

import headerStyles from "../styles/header.module.scss"
import { logout } from "../utils/auth"

const Header = () => {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
    `)

    return (
        <header>
            <Navbar expand="lg" fixed="top" className={headerStyles.navbar}>
                <Container className={headerStyles.container}>
                    <Navbar.Brand>
                        <Link className={headerStyles.title} to="/">{data.site.siteMetadata.title}</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-app"/>
                    <Navbar.Collapse id="navbar-app">
                        <Nav as="ul" className="ml-auto">
                            <Nav.Item as="li">
                                <Link className={headerStyles.navItem} to="/tutorials">Tutorials</Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link to='/' className={headerStyles.navButton}
                                    onClick={event => {
                                        event.preventDefault()
                                        logout()
                                    }}>
                                    Ausloggen
                                </Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header