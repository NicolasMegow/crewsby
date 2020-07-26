import React from "react"
import { Row, Col } from "react-bootstrap"

import Emoji from "../../components/shared/emoji"

import data from "../../content/coming-soon.json"

class ComingSoon extends React.Component {
    render() {
        return (
            <Row>
                <Col lg={6} style={{ marginBottom: "2rem" }}>
                    <h2 style={{marginBottom:"1.4rem"}}>Team-Trainings{' '}<small>•{' '}in Entwicklung</small></h2>
                    {data.TUTS[0].TM.map(goal => {
                        return (
                            <Row key={goal.part} style={{ marginBottom: "2rem" }}>
                                <Col>
                                    <h3><Emoji symbol={goal.symbol} label={goal.label}/>{' '}{goal.name}{' '}</h3>
                                    <ul>
                                    {goal.tuts.map(tut => {
                                        return (
                                            <li>{tut}</li>
                                        )})}
                                    </ul>
                                </Col>
                            </Row>
                        )
                    })}
                </Col>
                <Col lg={6} style={{ marginBottom: "2rem" }}>
                    <h2 style={{marginBottom:"1.4rem"}}>Solo-Trainings{' '}<small>•{' '}in Entwicklung</small></h2>
                    {data.TUTS[1].SO.map(goal => {
                        return (
                            <Row key={goal.part} style={{ marginBottom: "2rem" }}>
                                <Col>
                                    <h3><Emoji symbol={goal.symbol} label={goal.label}/>{' '}{goal.name}{' '}</h3>
                                    <ul>
                                    {goal.tuts.map(tut => {
                                        return (
                                            <li>{tut}</li>
                                        )})}
                                    </ul>
                                </Col>
                            </Row>
                        )

                    })}
                </Col>
            </Row>
        )
    }
}

export default ComingSoon;