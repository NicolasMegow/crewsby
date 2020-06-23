import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TutPart = () => {
    return (
        <p style={{marginLeft: "auto"}}>
            <FontAwesomeIcon icon={['fal', 'info-circle']} size="2x" fixedWidth />
            <FontAwesomeIcon icon={['fal', 'stopwatch']} size="2x" fixedWidth />
            <FontAwesomeIcon icon={['fal', 'question-circle']} size="2x" fixedWidth />
        </p>
    )
}

export default TutPart  
