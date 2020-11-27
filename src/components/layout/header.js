import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Container, Navbar, Nav } from "react-bootstrap"

import headerStyles from "../../styles/header.module.scss"

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
          <Navbar.Brand style={{ marginRight: "2rem", paddingLeft: "15px" }}>
            <Link className={headerStyles.title} to="/">
              {data.site.siteMetadata.title}
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-site" />
          <Navbar.Collapse id="basic-navbar-site">
            <Nav className="ml-auto">
              <Nav.Item>
                <Link className={headerStyles.navItem} to="/people-skills">
                  People skills
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link className={headerStyles.navItem} to="/team-building">
                  Team building
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link className={headerStyles.navItem} to="/pricing">
                  Pricing
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link className={headerStyles.navItem} to="/about-us">
                  About us
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
