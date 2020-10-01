import "@fortawesome/fontawesome-svg-core/styles.css"
import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../../styles/index.scss"
import layoutStyles from "../../styles/layout.module.scss"
import CookieConsent from "react-cookie-consent"
import Emoji from "../shared/emoji"

import { library, config } from "@fortawesome/fontawesome-svg-core"
import { fal } from "@fortawesome/pro-light-svg-icons"
import { fas } from "@fortawesome/pro-solid-svg-icons"
import { fad } from "@fortawesome/pro-duotone-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"

config.autoAddCss = false
library.add(fal)
library.add(fas)
library.add(fad)
library.add(fab)

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <Header />
      <CookieConsent
        location="bottom"
        buttonText="Ok"
        enableDeclineButton
        declineButtonText="Decline"
        cookieName="gatsby-gdpr-google-analytics"
        style={{ background: "#151515" }}
        disableButtonStyles
        buttonClasses="btn btn-primary m-3 pl-4 pr-4"
        declineButtonClasses="btn btn-outline-secondary m-3"
      >
        <Emoji symbol="🍪" label="cookie" /> We use cookies to improve your
        experience on this site.
      </CookieConsent>
      <div className={layoutStyles.content}>{props.children}</div>
      <Footer />
    </div>
  )
}

export default Layout
