import React from "react"
import { navigate } from "gatsby"

import { Container, Row, Col, Form, Button } from 'react-bootstrap'

import { handleLogin, isLoggedIn } from "../services/auth"


class Login extends React.Component {
    state = {
        username: ``,
        password: ``,
    }
    handleUpdate = event => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }
    handleSubmit = event => {
        event.preventDefault()
        handleLogin(this.state)
    }
    render() {
        if (isLoggedIn()) {
            navigate(`/tutorials`)
        }
        return (
            <Container>
                <Row>
                    <Col>
                        <h1>Log in</h1>
                        <Form
                            method="post"
                            onSubmit={event => {
                                this.handleSubmit(event)
                                navigate(`/tutorials`)
                            }}
                        >
                            <Form.Group controlId="formBasicUser" onChange={this.handleUpdate}>
                                <Form.Label>Benutzername</Form.Label>
                                <Form.Control type="text" name="username" placeholder="Dein Nutzername" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword" onChange={this.handleUpdate}>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="outline-primary" type="submit">
                                Einloggen
                            </Button>
                        </Form>
                    </Col>
                </Row>

            </Container>
        )
    }
}
export default Login