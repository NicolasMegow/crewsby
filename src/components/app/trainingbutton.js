import React from "react"
import { Link } from 'gatsby'
import { Row, Col } from 'react-bootstrap'

const TButton = ({ type, next, trainingType, onClick }) => {
    const content = {
        'Rückblick': { url: '/', text: 'Training abschliessen' },
        'Info': { url: `/${trainingType}/`, text: 'Übung starten' },
        'Übung': { url: `/${trainingType}/`, text: 'Rückblick starten' }
    }

    return (
        <Row>
            <Col>
                <Link
                    to={content[type].url + next}
                    className="btn btn-primary btn-lg"
                    onClick={onClick}
                >
                    {content[type].text}
                </Link>
            </Col>
        </Row>
    );
}

export default TButton;
