import React from "react"
import { Router } from "@reach/router"

import Layout from "../components/layout"
import Head from "../components/head"

import PrivateRoute from "../components/privateRoute"
import Profile from "../components/profile"
import Login from "../components/login"

const App = () => (
    <Layout>
        <Head title="App" />
        <Router basepath="/app">
            <Login path="/"/>
            <PrivateRoute path="/profile" component={Profile} />
        </Router>
    </Layout>
)
export default App