import React from "react"
import { Row, Col } from "react-bootstrap"
import Emoji from "../shared/emoji"

const Profile = ({ user }) => {
  return (
    <Row style={{ marginTop: "4rem" }}>
      <Col>
        <h1 style={{ fontSize: "2rem", marginBottom: "2rem" }}>
          <Emoji symbol="🗂️" label="data" /> Your Crewsby-profile:
        </h1>
        <p>
          <strong>Username:</strong> {user.nickname}
          <br></br>
          <strong>E-mail:</strong> {user.email}
          <br></br>
          <strong>Job-title:</strong> TBD
        </p>
      </Col>
    </Row>
  )
}

export default Profile
