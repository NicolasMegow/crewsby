/** @jsx jsx */

import "@fortawesome/fontawesome-svg-core/styles.css";
import { jsx } from "theme-ui";
import "./hamburger.scss";

import Header from "./header";
import Footer from "./footer";

import CookieConsent from "react-cookie-consent";
import Emoji from "../shared/emoji";

import { library, config } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/pro-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

config.autoAddCss = false;
library.add(fas);
library.add(fab);

const Layout = (props) => {
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Header />
      <main
        sx={{
          maxWidth: "1260px",
          mx: "auto",
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          mt: 5,
          px: 3,
        }}
      >
        <CookieConsent
          location="bottom"
          buttonText="Ok"
          enableDeclineButton
          declineButtonText="Decline"
          cookieName="gatsby-gdpr-google-analytics"
          style={{ background: "#151515" }}
          disableButtonStyles
          buttonClasses="small-button"
          declineButtonClasses="small-button"
        >
          <Emoji symbol="🍪" label="cookie" /> We use cookies to improve your
          experience on this site.
        </CookieConsent>
        {props.children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
