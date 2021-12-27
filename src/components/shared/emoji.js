/** @jsx jsx */
import { jsx } from "theme-ui";

const Emoji = (props) => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
    sx={{
      // needed for Chrome-Bug where emoji appear in black & white
      fontWeight: "initial !important",
    }}
  >
    {props.symbol}
  </span>
);
export default Emoji;
