import React from "react"

import { Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


var styles = {
    tutnav : {
        color: '#677b8c',
        paddingLeft: '0.5rem',
        paddingRight: '0.5rem',
    },
    tutnavActive : {
        color: '#0f62cc',
    },
}

const TutPart = ( key ) => {
    return (
        <Nav activeKey={key} as="ul" style={{float:"right"}}>
            <Nav.Item>
                <Nav.Link eventKey="Info" as="li" style={styles.tutnav}>
                <FontAwesomeIcon icon={['fal', 'info-circle']} />
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link eventKey="Aufgabe"  as="li" style={styles.tutnav}>
                <FontAwesomeIcon icon={['fal', 'stopwatch']} />
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link eventKey="Reflexion"  as="li" style={styles.tutnav}>
                <FontAwesomeIcon icon={['fal', 'question-circle']} />
                </Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default TutPart  
