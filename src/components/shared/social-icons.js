/** @jsx jsx */
import { jsx, Link } from "theme-ui";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialIcons = () => {
  return (
    <span>
      <Link
        href={`https://www.linkedin.com/company/crewsby/`}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="LinkedIn"
      >
        <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" fixedWidth />
      </Link>
      <Link
        href={`https://twitter.com/crewsbyteams`}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Twitter"
      >
        <FontAwesomeIcon
          icon={["fab", "twitter-square"]}
          size="2x"
          fixedWidth
        />
      </Link>
    </span>
  );
};

export default SocialIcons;
