import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Sidebar from '../components/sidebar'
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap'

import "../styles/index.scss"
import layoutStyles from "../styles/layout.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TeamNavData from "../content/team-nav.yaml"
import IndNavData from "../content/ind-nav.yaml"



const LayoutApp = (props) => {
  return (
    <Container fluid>
      <Header />
      <Row>
        <Col md lg={3} id="sidebar-wrapper" className={layoutStyles.sidebar}>
          <Tab.Container id="left-tabs-example" defaultActiveKey="ind">
            <Nav variant="pills">
              <Nav.Item>
                <Nav.Link eventKey="ind"><FontAwesomeIcon icon={['fal', 'user']} fixedWidth /></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="team"><FontAwesomeIcon icon={['fal', 'users']} fixedWidth /></Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="ind" className={layoutStyles.sidebarTab}>
                <Sidebar items={IndNavData.content} />
              </Tab.Pane>
              <Tab.Pane eventKey="team" className={layoutStyles.sidebarTab}>
                <Sidebar items={TeamNavData.content} />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Col>
        <Col md lg={9} id="page-content-wrapper">
          <div className={layoutStyles.containerApp}>
            <div className={layoutStyles.content}>
              {props.children}
            </div>
          </div>
          <Footer />
        </Col>
      </Row>
    </Container>
  )
}

export default LayoutApp