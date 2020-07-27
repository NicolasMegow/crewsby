import React from "react"
import { Link } from 'gatsby'
import { Row, Col } from 'react-bootstrap'



class TButton extends React.Component {
    render() {
        const content = {
            "Rückblick": { url: "/", text: "Training abschliessen" },
            "Info": { url: "/meine-trainings/", text: "Übung starten" },
            "Übung": { url: "/meine-trainings/", text: "Rückblick starten" }
        }
        return (
            <Row>
                <Col>
                    <Link to={content[this.props.type].url + this.props.next} className="btn btn-primary btn-lg">{content[this.props.type].text}</Link>
                </Col>
            </Row>
        )
    }
}

export default TButton;