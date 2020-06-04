import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import footerStyles from "../styles/footer.module.scss"

const Footer = () => {
    const data = useStaticQuery(graphql `
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
        `)
    return (
        <footer className={footerStyles.footer}>
            <p>
                Teamgefühl.com © 2020
            </p>
            <Link className={footerStyles.linkItem} to="/impressum">Impressum</Link>
            <Link className={footerStyles.linkItem} to="/datenschutz">Datenschutz</Link>
        </footer>
    )
}

export default Footer