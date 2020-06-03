import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import headerStyles from "../styles/header.module.scss"

const Header = () => {
    const data = useStaticQuery(graphql `
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
    `)

    return (
        <header className={headerStyles.header}>
            <h1>
                <Link className={headerStyles.title} to="/">{data.site.siteMetadata.title}</Link>
            </h1>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link className={headerStyles.navItem} to="/">Überblick</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} to="/teamleitung">Teamleitung</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} to="/teambuilding">Teambuilding</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header