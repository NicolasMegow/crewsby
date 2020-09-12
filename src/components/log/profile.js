import React from "react"
import { Row } from "react-bootstrap"
;<Row>
  <Col md={4}>
    <TextField
      name="Dein Name"
      placeholder="Max Mustermann"
      handleCallback={handleCallback}
    />
  </Col>
  <Col md={4}>
    <TextField
      name="Deine E-Mail"
      placeholder="Max@Mustermann.com"
      handleCallback={handleCallback}
    />
  </Col>
  <Col md={4}>
    <TextField
      name="Dein Job-Title"
      placeholder="New Venture Manager"
      handleCallback={handleCallback}
    />
  </Col>
</Row>
