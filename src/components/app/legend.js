import React from "react"
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Legend extends React.Component {
    render() {
        const content = {
            "TM": {
                col1_icon: ["fas", "users"], col1_text: "die ganze Crew",
                col2_icon: ["fas", "hourglass-half"], col2_text: "30 Min / Übung",
                col3_icon: ["fas", "file-edit"], col3_text: "Stift & Papier",
                col4_icon: ["fas", "headset"], col4_text: "Remote & vor Ort"

            },
            "SO": {
                col1_icon: ["fas", "user"], col1_text: "nur Du",
                col2_icon: ["fas", "hourglass-half"], col2_text: "20 Min / Übung",
                col3_icon: ["fas", "file-edit"], col3_text: "Stift & Papier",
                col4_icon: ["fas", "phone-laptop"], col4_text: "mobil & am PC"
            }
        }
        return (
            <div>
                <Row style={{ paddingTop: "1rem", border: "1px solid #000000" }}>
                    <Col md={6} lg={3}>
                        <p><FontAwesomeIcon icon={content[this.props.info].col1_icon} fixedWidth color="#78A9f7" />{" "}
                            {content[this.props.info].col1_text}</p>
                    </Col>
                    <Col md={6} lg={3}>
                        <p><FontAwesomeIcon icon={content[this.props.info].col2_icon} fixedWidth color="#78A9f7" />{" "}
                            {content[this.props.info].col2_text}</p>
                    </Col>
                    <Col md={6} lg={3}>
                        <p><FontAwesomeIcon icon={content[this.props.info].col3_icon} fixedWidth color="#78A9f7" />{" "}
                            {content[this.props.info].col3_text}</p>
                    </Col>
                    <Col md={6} lg={3}>
                        <p><FontAwesomeIcon icon={content[this.props.info].col4_icon} fixedWidth color="#78A9f7" />{" "}
                            {content[this.props.info].col4_text}</p>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Legend;