const myTheme = {
  breakpoints: ["40em", "52em", "64em"],
  fontSizes: ["1rem", "1.4rem", "2rem", "2.4rem", "4rem"],
  colors: {
    text: "#151515",
    background: "#fff",
    primary: "#4285f4",
    accent: "#d9e6fc",
    muted: "#ebebeb",
  },
  space: [0, ".8rem", "1rem", "2rem", "6rem", "8rem", "12rem"],
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "system-ui, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.3,
    heading: 1.4,
  },
  variants: {},
  text: {
    subtitle: {
      fontSize: 1,
      mb: 2,
    },
  },
  forms: {
    input: {
      fontFamily: "body",
      maxWidth: "24em",
      "::placeholder": {
        color: "primary",
      },
    },
  },
  links: {
    logo: {
      fontSize: 3,
      fontWeight: "bold",
      textDecoration: "none",
      color: "text",
    },
    nav: {
      fontWeight: "bold",
      textDecoration: "none",
      color: "text",
      ml: 2,
      '&[aria-current="page"]': {
        color: "primary",
      },
    },
    textButton: {
      fontWeight: "bold",
    },
  },
  buttons: {
    primary: {
      color: "white",
      bg: "primary",
      width: "100%",
      minWidth: "16em",
      maxWidth: "24em",
      px: 3,
      fontFamily: "body",
      fontWeight: "bold",
      "&:hover": {
        color: "primary",
        bg: "#d9e6fc",
      },
    },
    outline: {
      color: "primary",
      bg: "white",
      width: "100%",
      minWidth: "16em",
      maxWidth: "24em",
      px: 3,
      fontFamily: "body",
      fontWeight: "bold",
      borderWidth: "1px",
      borderStyle: "solid",
      "&:hover": {
        color: "primary",
        bg: "#d9e6fc",
      },
    },
    gray: {},
    menu: {
      display: "none",
      width: "100%",
      height: "100%",
      ":hover": {
        color: "primary",
      },
      "@media screen and (max-width: 768px)": {
        display: "block",
        cursor: "pointer",
      },
    },
  },
  badges: {
    primary: {
      color: "background",
      bg: "primary",
    },
    outline: {
      color: "primary",
      bg: "transparent",
      boxShadow: "inset 0 0 0 1px",
    },
  },
  styles: {
    hr: {
      borderColor: "text",
      borderWidth: "1px",
      borderStyle: "solid",
      mt: 2,
      mb: 2,
    },
    root: {
      fontFamily: "body",
      fontSize: 0,
      h1: {
        fontSize: 3,
        fontFamily: "heading",
        fontWeight: "heading",
        color: "text",
        mt: 1,
        mb: 1,
      },
      h2: { fontSize: 2 },
      h3: {
        fontSize: 1,
        fontWeight: "bold",
        mt: 2,
        mb: 0,
      },
      p: { mt: 0 },
      a: {
        textDecoration: "none",
        color: "text",
        "&:hover": {
          color: "primary",
        },
      },
      table: {
        width: "100%",
        borderCollapse: "separate",
        borderSpacing: 0,
      },
      th: {
        textAlign: "left",
        borderBottomStyle: "solid",
      },
      td: {
        textAlign: "left",
        borderBottomStyle: "solid",
      },
      img: {
        maxWidth: "100%",
      },
    },
  },
}

export default myTheme
