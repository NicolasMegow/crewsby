import React from "react"
import { Row, Col } from "react-bootstrap"

import Emoji from "../shared/emoji"

import data from "../../content/coming-soon.json"

class ComingSoon extends React.Component {
  render() {
    return (
      <>
        <Row style={{ marginTop: "3rem" }}>
          <Col>
            <h2 style={{ marginBottom: "2rem" }}>Coming soon: </h2>
          </Col>
        </Row>
        <Row>
          {data.map(goal => {
            return (
              <Col lg={6} key={goal.label}>
                <h3>
                  <Emoji symbol={goal.symbol} label={goal.label} /> {goal.name}{" "}
                </h3>
                <ul>
                  {goal.skills.map((skill, id) => {
                    return (
                      <li key={id}>
                        <p style={{ marginBottom: "0" }}>{skill}</p>
                      </li>
                    )
                  })}
                </ul>
              </Col>
            )
          })}
        </Row>
      </>
    )
  }
}

export default ComingSoon
