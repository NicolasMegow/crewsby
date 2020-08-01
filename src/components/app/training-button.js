import React from "react"
import { Link } from 'gatsby'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TButton = ({ part, next, type, onClickInfo }) => {
    const content = {
        'Rückblick': { url: `/${type}`, text: {'solo-trainings': 'Hab mir Notizen gemacht' , 'team-trainings': 'Haben wir besprochen' } },
        'Info': { url: `/${type}/${next}`, text: {'solo-trainings': 'Hab ich verstanden', 'team-trainings': 'Haben wir verstanden' }  },
        'Übung': { url: `/${type}/${next}`, text: {'solo-trainings': 'Hab ich gemacht', 'team-trainings': 'Haben wir gemacht'}  },
    }

    return (
        <Row>
            <Col>
                <Link
                    to={content[part].url}
                    className="btn btn-outline-primary btn-lg"
                    onClick={onClickInfo}
                >
                    <FontAwesomeIcon icon={['fas', 'check-circle']} fixedWidth/>{" "}
                    {content[part].text[type]}
                </Link>
            </Col>
        </Row>
    );
}

export default TButton;