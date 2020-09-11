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
              <Col md={4} key={goal.part}>
                <h4>
                  <Emoji symbol={goal.symbol} label={goal.label} /> {goal.name}{" "}
                </h4>
                <ul>
                  {goal.tuts.map((tut, id) => {
                    return <li key={id}>{tut}</li>
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
