/** @jsx jsx */
import { jsx, Flex } from "theme-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SharingButton = ({ link, message }) => {
  return (
    <Flex
      sx={{
        alignItems: "center",
        my: 1,
        p: 3,
        bg: "highlight",
        borderRadius: "6px",
        color: "black",
      }}
    >
      <p sx={{ mb: 0, fontSize: 1 }}>
        Share <strong>{message}</strong> with the world:
      </p>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          link
        )}`}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="LinkedIn"
      >
        <FontAwesomeIcon
          icon={["fab", "linkedin"]}
          size="2x"
          fixedWidth
          color="#000000"
        />
      </a>
      <a
        href={`https://twitter.com/intent/tweet/?text=${encodeURIComponent(
          message
        )}&url=${encodeURIComponent(link)}`}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Twitter"
      >
        <FontAwesomeIcon
          icon={["fab", "twitter-square"]}
          size="2x"
          fixedWidth
          color="#000000"
        />
      </a>
    </Flex>
  );
};

export default SharingButton;
