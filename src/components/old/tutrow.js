import React from "react"
import { Link } from "gatsby"
import { Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import appStyles from "../styles/app.module.scss"
import ScrollMenu from "react-horizontal-scrolling-menu"

// One item component
// selected prop will be passed
const MenuItem = ({ text, url, inhalt, disabled, icon }) => {
  if (disabled === "true") {
    return (
      <div className={appStyles.menuItem}>
      <div className={appStyles.disabledLink}>
        <h3>{text}</h3>
        <Row>
          <Col xs={8}>
            <p style={{ fontSize: ".8rem", marginBottom: "0" }}>{inhalt}</p>
          </Col>
          <Col xs={4}>
            <FontAwesomeIcon
              icon={icon}
              size="2x"
              style={{ float: "right" }}
            />
          </Col>
        </Row>
      </div>
      </div>
    )
  }
  return (
    <div className={appStyles.menuItem}>
      <Link to={url}>
        <h3>{text}</h3>
        <Row>
          <Col xs={8}>
            <p style={{ fontSize: ".8rem", marginBottom: "0" }}>{inhalt}</p>
          </Col>
          <Col xs={4}>
            <FontAwesomeIcon
              icon={icon}
              size="2x"
              style={{ float: "right" }}
            />
          </Col>
        </Row>
      </Link>
    </div>
  )
}

// All items component
// Important! add unique key
export const Menu = list =>
  list.map(el => {
    return (
      <MenuItem
        text={el.thema}
        key={el.thema}
        inhalt={el.inhalt}
        url={el.url}
        disabled={el.disabled}
        icon={el.icon}
      />
    )
  })

const Arrow = ({ icon }) => {
  return (
    <div className={appStyles.scrollMenuArrow}>
      <FontAwesomeIcon icon={icon} fixedWidth size="2x"/>
    </div>
  )
}

const ArrowLeft = Arrow({ icon: ["fas", "angle-left"] })
const ArrowRight = Arrow({ icon: ["fas", "angle-right"] })

const selected = "item1"

class TutRow extends React.Component {
  constructor(props) {
    super(props)
    // call it again if items count changes
    this.list = props.data
    this.menuItems = Menu(this.list)
  }

  state = {
    selected,
  }

  onSelect = key => {
    this.setState({ selected: key })
  }
  render() {
    const { selected } = this.state
    // Create menu from items
    const menu = this.menuItems
    return (
      <div>
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={this.onSelect}
          scrollBy={1}
          alignCenter={false}
        />
      </div>
    )
  }
}

export default TutRow
