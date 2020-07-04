import React from "react"
import { Alert } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




class Hint extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
    }
    render() {
        return (
            <>
            <Alert variant={this.props.variant} style={{width:"100%"}} show={this.state.show} onClose={() => this.setState({show: false})} dismissible>
            <FontAwesomeIcon icon={this.props.icon} fixedWidth/>
            <p style={{marginBottom:"0"}}>{this.props.line1}</p>
            <p style={{marginBottom:"0"}}>{this.props.line2}</p>
            </Alert>
            {!this.state.show && <p style={{marginLeft: "auto"}}>
                <FontAwesomeIcon icon={['fas', 'info-circle']} fixedWidth size="2x" onClick={() => this.setState({show: true})} className="info-icon"/>
                </p>}
            </>
        )
    }
}

export default Hint;