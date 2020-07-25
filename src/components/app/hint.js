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
            <div>
            <Alert variant={this.props.variant} style={{width:"100%", marginTop:"2rem", marginBottom:"2rem"}} show={this.state.show} onClose={() => this.setState({show: false})}>
            <p style={{marginBottom:"0"}}>
                <FontAwesomeIcon icon={this.props.icon} fixedWidth/>{' '}
                {this.props.line}
                </p>
            </Alert>
            {!this.state.show && <p style={{marginLeft: "auto"}}>
                <FontAwesomeIcon icon={['fas', 'info-circle']} fixedWidth size="2x" onClick={() => this.setState({show: true})} className="info-icon"/>
                </p>}
            </div>
        )
    }
}

export default Hint;