import React, { Component } from "react"
import { Container, Row, Col } from 'react-bootstrap'

import Layout from "../components/layout"
import Head from "../components/head"
import TutPart from "../components/tutPart"

import { Link } from "gatsby"
import { getUser, isLoggedIn } from "../services/auth"


const data = [
    { checked: false, value: 'document 1' },
    { checked: true, value: 'document 2' },
    { checked: true, value: 'document 3' },
    { checked: false, value: 'document 4' },
    { checked: false, value: 'document 5' },
]

const Item = props => (
    <div>
        <input type="checkbox" checked={props.checked} onChange={props.onCheckChange} />
        { props.value }
    </div>
)

const Checkbox = ({ label, isSelected, onCheckboxChange }) => (
    <div className="form-check">
      <label>
        <input
          type="checkbox"
          name={label}
          checked={isSelected}
          onChange={onCheckboxChange}
          className="form-check-input"
        />
        {label}
      </label>
    </div>
  );

const TestingPage = () => {
    return (
        <Layout>
          <Container>
            <Row>
            <h1>Hello {isLoggedIn() ? getUser().name : "world"}!</h1>
      <p>
        {isLoggedIn() ? (
          <>
            You are logged in, so check your{" "}
            <Link to="/app/profile">profile</Link>
          </>
        ) : (
          <>
            You should <Link to="/app/login">log in</Link> to see restricted
            content
          </>
        )}
      </p>
      </Row>
{/*
<Row style={{ marginTop: "3rem" }}>
                <Col>
                
                    <p><FontAwesomeIcon icon={['fal', 'user-astronaut']} fixedWidth size="4x" /> {'  '}
                        <FontAwesomeIcon icon={['fal', 'user-md']} fixedWidth size="4x" /> {'  '}
                        <FontAwesomeIcon icon={['fal', 'user-tie']} fixedWidth size="4x" color="#0f62cc" /></p>
                    <h1 style={{ marginBottom: "0" }}>Hello {isLoggedIn() ? getUser().name : "world"}!</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    {isLoggedIn() ? (
                        <h2 style={{ marginTop: "0", color: "#0f62cc" }}>
                            You are logged in, so check your{" "}
                            <Link to="/app/profile">profile</Link>
                        </h2>
                    ) : (
                            <h2 style={{ marginTop: "0", color: "#0f62cc" }}>
                                You should <Link to="/app/login">log in</Link> to see restricted content
                            </h2>
                        )}
                </Col>
            </Row>
                    */}
      <Row>
            <Checkbox />
            <Item />
            <TutPart />
            </Row>
          </Container>
        </Layout>
    )
}

export default TestingPage
