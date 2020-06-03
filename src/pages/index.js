import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
  return (
      <Layout>
        <Head title="Home"/>
        <h1>Teamgefuehl.com</h1>  
        <h2>I'm </h2>
        <p>Need a developer? <Link to="/teamleitung">Contact Me</Link></p>
      </Layout>
    )
}

export default IndexPage