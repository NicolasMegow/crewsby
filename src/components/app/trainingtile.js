import React from "react"
import { Link } from "gatsby"
import { Col } from "react-bootstrap"

import appStyles from "../../styles/app.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


class TrainingTile extends React.Component {
    render() {
        return (
            <Col
                md={6}
                lg={4}
                className={appStyles.menuItem}
                key={this.props.key}
            >
                <Link to={this.props.url}>
                    <h4>{this.props.topic}</h4>
                    <p
                        style={{
                            fontSize: "1rem",
                            marginBottom: "0",
                        }}
                    >
                        {this.props.content}
                    </p>
                    <FontAwesomeIcon
                        icon={this.props.icon}
                        size="2x"
                        style={{ float: "right" }}
                    />
                </Link>
            </Col>
        )
    }
}

export default TrainingTile;
