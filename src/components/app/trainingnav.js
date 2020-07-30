import React from "react"
import { Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

var styles = {
    divided: {
        display: 'flex',
        alignItems: 'center',
        maxWidth: '10rem',
      },
    divider: {
        flexGrow: '1',
        borderBottom: '1px dashed #DAE4F2',
        margin: '5px',
      },
    tutnav: {
        fontSize: "1rem",
        color: '#ffffff',
        backgroundColor: '#DAE4F2',
        border: '1px solid #DAE4F2',
        borderRadius: '6px',
        paddingLeft: '0.5rem',
        paddingRight: '0.5rem',
    },
    tutnavActive: {
        fontSize: "1rem",
        color: '#ffffff',
        backgroundColor: '#4285F4',
        border: '1px solid #4285F4',
        borderRadius: '6px',
        paddingLeft: '0.5rem',
        paddingRight: '0.5rem',
    },
}

const isActive = (key1, key2) => {
    if (key1 === key2) {
        return styles.tutnavActive
    }
    return styles.tutnav
}


class TButton extends React.Component {
    render() {
        return (
            <Nav style={styles.divided} className="ml-auto">
            <Nav.Item>
                <Nav.Link style={isActive("Info", this.props.part)} as="div">
                    <FontAwesomeIcon icon={['fas', 'lightbulb']} fixedWidth />
                </Nav.Link>
            </Nav.Item>
            <span style={styles.divider}></span>
            <Nav.Item>
                <Nav.Link style={isActive("Übung", this.props.part)} as="div">
                    <FontAwesomeIcon icon={['fas', 'stopwatch']} fixedWidth />
                </Nav.Link>
            </Nav.Item>
            <span style={styles.divider}></span>
            <Nav.Item>
                <Nav.Link style={isActive("Rückblick", this.props.part)} as="div">
                    <FontAwesomeIcon icon={['fas', 'question']} fixedWidth />
                </Nav.Link>
            </Nav.Item>
        </Nav>
        )
    }
}

export default TButton;