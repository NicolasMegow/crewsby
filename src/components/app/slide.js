import React from "react"
import { Row, Col, Button } from 'react-bootstrap'
import ProgressBar from "./progress-bar"


const Slide = ({ slide, step, currentStep, setStep, length }) => {
    if (currentStep !== step) { // Prop: The current step
        return null
    }

    return (<>
        <Row style={{ width: "100vw", minHeight: "50vh" }}><Col>{slide}</Col></Row>
        <Row style={{ width: "100vw" }}>
            <Col style={{ display: "flex", justifyContent: "space-between" }}>
                {currentStep >= 1 ? (<Button onClick={() => setStep(currentStep - 1)}>Zurück</Button>) : (<Button disabled>Zurück</Button>)}
                <ProgressBar length={length} step={currentStep} />
                <Button onClick={() => setStep(currentStep + 1)}>Weiter</Button></Col>
        </Row>
    </>
    )
}

export default Slide