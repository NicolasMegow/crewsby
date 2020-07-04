import React from "react"
import { Link } from "gatsby"
import { Row, Col, Tab } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import appStyles from "../styles/app.module.scss"

class TutMap extends React.Component {
    render() {
        const data = this.props.data
        return (
            data.map(item => 
                <Tab.Pane eventKey={item.key} key={item.key} className={appStyles.tab}>
                    <Row className={appStyles.row}>
                        <Col>
                            <Row><Col>
                                <p className={appStyles.info1}>THEMA:</p>
                                <p className={appStyles.info2}>Was interessiert dich genau?</p>
                            </Col></Row>
                            <Row>
                                {item.themen.map((subItem) => {
                                    if (subItem.urlstart === 'coming-soon') {
                                        return (
                                            <Col sm={6} lg={4} className={appStyles.tile} key={subItem.thema}>
                                                <div className={appStyles.disabledLink}>
                                                    <h4>{subItem.thema}</h4>
                                                    <Row>
                                                        <Col xs={8}>
                                                            <p style={{ fontSize: ".8rem", marginBottom: "0" }}>{subItem.inhalt}</p>
                                                        </Col>
                                                        <Col xs={4}>
                                                            <FontAwesomeIcon icon={subItem.icon} size="2x" style={{ float: "right" }} color="#9197A1" />
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </Col>)
                                    } else {
                                        return (
                                            <Col sm={6} lg={4} className={appStyles.tile} key={subItem.thema}>
                                                <Link to={`/tutorials/${subItem.urlstart}`}>
                                                    <h4>{subItem.thema}</h4>
                                                    <Row>
                                                        <Col xs={8}>
                                                            <p style={{ fontSize: ".8rem", marginBottom: "0" }}>{subItem.inhalt}</p>
                                                        </Col>
                                                        <Col xs={4}>
                                                            <FontAwesomeIcon icon={subItem.icon} size="2x" style={{ float: "right" }} />
                                                        </Col>
                                                    </Row>
                                                </Link>
                                            </Col>)
                                    }
                                })}
                            </Row>
                        </Col>
                    </Row>
                </Tab.Pane>
            )
        );
    }
}

export default TutMap
