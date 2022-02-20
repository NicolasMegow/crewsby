/** @jsx jsx */
import { jsx, Flex, Box, Link } from "theme-ui";
import { useState } from "react";
import { Link as GatsbyLink, graphql, useStaticQuery } from "gatsby";

import CrewsbyLogo from "../../images/svg/Crewsby_Logo.svg";
import "./hamburger.scss";

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <header
      sx={{
        width: "100%",
        maxWidth: "1260px",
        py: 2,
        px: 2,
        bg: "background",
        position: "fixed",
        zIndex: "1",
        top: "0",
      }}
    >
      <Flex sx={{ alignItems: "center", justifyContent: "space-between" }}>
        <Flex>
          <Link
            to="/"
            as={GatsbyLink}
            variant="logo"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <CrewsbyLogo width="6rem" height="4rem" />
            {data.site.siteMetadata.title}
          </Link>
        </Flex>
        <Box>
          <ul className={toggleMenu ? "nav-menu active" : "nav-menu"}>
            <li sx={{ listStyle: "none" }} className="nav-item">
              <Link
                variant="nav"
                to="/team-building"
                as={GatsbyLink}
                onClick={handleToggle}
              >
                Team building
              </Link>
            </li>
            <p
              sx={{
                lineHeight: "2.8",
                fontWeight: "500",
                px: 2,
                py: 0,
                m: 0,
                display: "inline",
                "@media screen and (max-width: 52em)": {
                  display: "none",
                },
              }}
            >
              •
            </p>
            <li sx={{ listStyle: "none" }} className="nav-item">
              <Link
                variant="nav"
                to="/our-vision"
                as={GatsbyLink}
                onClick={handleToggle}
              >
                Our vision
              </Link>
            </li>
          </ul>
          <button
            className={toggleMenu ? "hamburger active" : "hamburger"}
            onClick={handleToggle}
            label="menuToggle"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </Box>
      </Flex>
    </header>
  );
};

export default Header;
