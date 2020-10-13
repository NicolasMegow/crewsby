import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Container, Navbar, Nav } from "react-bootstrap"

import headerStyles from "../../styles/header.module.scss"
import Emoji from "../shared/emoji"

import { useAuth0 } from "../../../plugins/gatsby-plugin-auth0"

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
  const { isAuthenticated, logout, loginWithPopup } = useAuth0()
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
            <Nav>
              <Nav.Item>
                <Link className={headerStyles.navItem} to="/culture-hacks">
                  <Emoji symbol="🌶️" label="culture hacks" /> Culture hacks
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link className={headerStyles.navItem} to="/learning-zone">
                  <Emoji symbol="🍋" label="learning zone" /> Learning zone
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link className={headerStyles.navItem} to="/peer-support">
                  <Emoji symbol="🍏" label="peer support" /> Peer support
                </Link>
              </Nav.Item>
            </Nav>
            <hr style={{ marginTop: "1rem", marginBottom: "1rem" }}></hr>
            <Nav className="ml-auto">
              {isAuthenticated ? (
                <>
                  <Nav.Item>
                    <Link
                      to="/"
                      className="btn btn-outline-primary"
                      style={{ marginRight: "0" }}
                      onClick={event => {
                        event.preventDefault()
                        logout()
                      }}
                    >
                      Log out
                    </Link>
                  </Nav.Item>
                </>
              ) : (
                <>
                  <Nav.Item>
                    <Link
                      to="/"
                      className="btn btn-outline-primary"
                      style={{ marginRight: ".5rem" }}
                      onClick={event => {
                        event.preventDefault()
                        loginWithPopup({ action: "signup" })
                      }}
                    >
                      Sign up
                    </Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link
                      to="/"
                      className="btn btn-primary"
                      style={{ marginRight: "0" }}
                      onClick={event => {
                        event.preventDefault()
                        loginWithPopup()
                      }}
                    >
                      Log in
                    </Link>
                  </Nav.Item>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
