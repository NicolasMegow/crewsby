import React from "react";
import { Link as GatsbyLink } from "gatsby";

import Emoji from "./emoji";
import Video from "./video";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const shortcodes = {
  Emoji,
  FontAwesomeIcon,
  Video,
  a: Link,
  h2: (props) => (
    <h2 {...props} style={{ marginTop: "4rem", scrollMarginTop: "8rem" }}>
      {props.children}
    </h2>
  ),
  h3: (props) => (
    <h3 {...props} style={{ marginTop: "4rem" }}>
      {props.children}
    </h3>
  ),
  h4: (props) => (
    <h4 {...props} style={{ color: "#4285f4" }}>
      {props.children}
    </h4>
  ),
  td: (props) => (
    <td {...props} style={{ border: "1px solid #151515", padding: ".4rem" }} />
  ),
  th: (props) => (
    <th {...props} style={{ padding: ".4rem", color: "#4285f4" }} />
  ),
  table: (props) => (
    <table {...props} style={{ marginTop: ".5rem", marginBottom: "2rem" }} />
  ),
};

function Link({ children, href }) {
  if (href.startsWith("../")) {
    // Use Gatsby's Link component for internal site navigation
    // to benefit from the preloading features
    // See: https://www.gatsbyjs.org/docs/gatsby-link/
    return <GatsbyLink to={href}>{children}</GatsbyLink>;
  }
  // Check if the link is for a section on the page
  // We don't want to add the attributes for the on page links
  const onPage = href.startsWith("#");
  return (
    <a
      href={href}
      // Open the link in a new page
      target={onPage ? null : "_blank"}
      // Add noopener and noreferrer for security reasons
      rel={onPage ? null : "noopener noreferrer"}
    >
      {children}
    </a>
  );
}
