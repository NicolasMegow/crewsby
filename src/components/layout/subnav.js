import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav } from "react-bootstrap"

import headerStyles from "../../styles/header.module.scss"

const Subnav = () => {
  return (
    <Navbar expand="lg" className={headerStyles.navbar}>
      <Nav>
        <Nav.Item>
          <Link className={headerStyles.navItem} to="uebungen">
            Übungen
          </Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  )
}

export default Subnav
