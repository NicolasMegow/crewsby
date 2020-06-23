import React, { Component } from "react"
import { Container, Row, Col } from 'react-bootstrap'

import Layout from "../components/layout"
import Head from "../components/head"
import TutPart from "../components/tut-part"




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
            <Checkbox />
            <Item />
            <TutPart />
            </Row>
          </Container>
        </Layout>
    )
}

export default TestingPage
