import React from "react"
import { Link } from "gatsby"
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const TutPart = () => {
    return (
        <Container>
        <p style={{marginLeft: "auto"}}>
            <FontAwesomeIcon icon={['fal', 'info-circle']} size="2x" fixedWidth />
            <FontAwesomeIcon icon={['fal', 'stopwatch']} size="2x" fixedWidth />
            <FontAwesomeIcon icon={['fal', 'question-circle']} size="2x" fixedWidth />
        </p>
        </Container>
    )
}

export default TutPart  
