import React from "react"
import { Link } from 'gatsby'
import { Row, Col } from 'react-bootstrap'

const TButton = ({ part, next, type, onClickInfo }) => {
    const content = {
        'Rückblick': { url: `/${type}`, text: 'Training abschliessen' },
        'Info': { url: `/${type}/${next}`, text: 'Übung starten' },
        'Übung': { url: `/${type}/${next}`, text: 'Rückblick starten' },
    }

    return (
        <Row>
            <Col>
                <Link
                    to={content[part].url}
                    className="btn btn-primary btn-lg"
                    onClick={onClickInfo}
                >
                    {content[part].text}
                </Link>
            </Col>
        </Row>
    );
}

export default TButton;
