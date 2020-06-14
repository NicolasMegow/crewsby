import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/index.scss"
import layoutStyles from "../styles/layout.module.scss"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fal } from '@fortawesome/pro-light-svg-icons'
import { fas } from '@fortawesome/pro-solid-svg-icons'

library.add(fal)
library.add(fas)

const Layout = (props) => {
    return (
        <div className={layoutStyles.container}>
            <Header />
            <div className={layoutStyles.content}>
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout