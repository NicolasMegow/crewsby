import React from "react"
import { Link, graphql, useStaticQuery, navigate } from "gatsby"
import { Container, Navbar, Nav, Button } from 'react-bootstrap'

import headerStyles from "../styles/header.module.scss"
import { isLoggedIn, logout } from "../services/auth"

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
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav as="ul" className="ml-auto">
                            <Nav.Item as="li">
                                <Link className={headerStyles.navItem} to="/training">Training</Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link className={headerStyles.navItem} to="/ressourcen">Ressourcen</Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link className={headerStyles.navItem} to="/preise">Preise</Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link className={headerStyles.navItem} to="/ueber-uns">Über uns</Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                {isLoggedIn() ? (
                                    <Link
                                        to="/"
                                        className={headerStyles.navButton}
                                        onClick={event => {
                                            event.preventDefault()
                                            logout(() => navigate(`/`))
                                        }}
                                    >
                                        Sign out
                                    </Link>
                                ) : <Link to="/app/" className={headerStyles.navButton}>Sign in</Link>}
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header