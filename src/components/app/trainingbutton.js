import React from "react"
import { Link } from 'gatsby'
import { Row, Col } from 'react-bootstrap'



class TButton extends React.Component {
    render() {
        const content = {
            "Rückblick": { url: `/${this.props.type}`, text: "Training abschliessen" },
            "Info": { url: `/${this.props.type}/${this.props.next}`, text: "Übung starten" },
            "Übung": { url: `/${this.props.type}/${this.props.next}`, text: "Rückblick starten" }
        }
        return (
            <Row>
                <Col>
                    <Link to={content[this.props.part].url} className="btn btn-primary btn-lg">{content[this.props.part].text}</Link>
                </Col>
            </Row>
        )
    }
}

export default TButton;