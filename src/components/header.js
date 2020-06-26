import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Container, Navbar, Nav } from 'react-bootstrap'

import headerStyles from "../styles/header.module.scss"
import { login, logout, isAuthenticated, } from "../utils/auth"

const AppNav = () => {
    if (!isAuthenticated()) {
        return (
            <>
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
            </>
        )
    }
    return (
        <Nav.Item as="li">
            <Link className={headerStyles.navItem} to="/tutorials">Tutorials</Link>
        </Nav.Item>
    )
}

const LoginButton = () => {
    if (!isAuthenticated()) {
        return (
            <Link to='/' className={headerStyles.navButton}
                onClick={event => {
                    event.preventDefault()
                    login()
                }}>
                Einloggen
            </Link>
        )
    }
    return (
        <Link to='/' className={headerStyles.navButton}
            onClick={event => {
                event.preventDefault()
                logout()
            }}>
            Ausloggen
        </Link>
    )
}

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
                            <AppNav />
                            <Nav.Item as="li">
                                <LoginButton />
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header