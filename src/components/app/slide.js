import React from "react"
import { Link } from "gatsby"
import { Row, Col, Button } from "react-bootstrap"
import ProgressBar from "./progress-bar"

const Slide = ({ slide, step, currentStep, setStep, length }) => {
  if (currentStep !== step) {
    // Prop: The current step
    return null
  }

  return (
    <>
      <Row style={{ width: "100vw", minHeight: "50vh" }}>
        <Col>{slide}</Col>
      </Row>
      <Row style={{ width: "100vw" }}>
        <Col style={{ display: "flex", justifyContent: "flex-end" }}>
          <p>
            {step}/{length}
          </p>
        </Col>
      </Row>
      <Row style={{ width: "100vw" }}>
        <Col style={{ display: "flex", justifyContent: "space-between" }}>
          {currentStep >= 1 ? (
            <Button onClick={() => setStep(currentStep - 1)}>Zurück</Button>
          ) : (
            <Link to="../" className="btn btn-primary">
              Zurück
            </Link>
          )}
          <ProgressBar length={length} step={currentStep} />
          <Button onClick={() => setStep(currentStep + 1)}>Weiter</Button>
        </Col>
      </Row>
    </>
  )
}

export default Slide
