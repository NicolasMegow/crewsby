import React from 'react'
import { Link } from "gatsby"
import { Nav } from 'react-bootstrap'

import layoutStyles from "../styles/layout.module.scss"

function SidebarItem({ page, subfolderitems, ...rest }) {
    return (
        <div>
            <Nav.Item {...rest}>
                {page}
            </Nav.Item>
            {Array.isArray(subfolderitems) ? (
                <ul style={{ listStyleType: "none" }}>
                    {subfolderitems.map((subItem) => {
                        return (
                            <li>
                                <Link 
                                    to={`/tutorials/${subItem.url}`} 
                                    className={layoutStyles.sidebarSubitem} 
                                    activeStyle={{ color: "#0f62cc", fontWeight:"bold" }}>
                                    {subItem.page}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            ) : null}
        </div>
    )
}

function Sidebar({ items }) {
    return (
        <div>
            <Nav className="flex-column">
                {items.map((sidebarItem, index) => (
                    <SidebarItem
                        key={`${sidebarItem.page}${index}`}
                        {...sidebarItem}
                    />
                ))}
            </Nav>
        </div >
    )
}

export default Sidebar
