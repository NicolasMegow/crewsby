const myTheme = {
  breakpoints: ["40em", "52em", "64em"],
  fontSizes: ["1rem", "1.4rem", "2rem", "2.4rem", "4rem"],
  colors: {
    text: "#264653",
    background: "#FFFFFF",
    primary: "#E76F51",
    primary_light: "#E9C46A",
    dark: "#264653",
    accent: "#2A9D8F",
    muted: "#F4A261",
  },
  space: [0, ".8rem", "1rem", "2rem", "6rem", "8rem", "12rem"],
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
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
        color: "primary_light",
      },
    },
  },
  links: {
    logo: {
      fontSize: 3,
      fontWeight: "bold",
      textDecoration: "none",
      color: "dark",
      "&:hover": {
        color: "primary",
      },
    },
    nav: {
      color: "dark",
      fontWeight: "bold",
      textDecoration: "none",
      "&:hover": {
        color: "primary",
      },
      "&[aria-current='page']": {
        color: "primary",
      },
    },
    textButton: {
      fontWeight: "bold",
      textTransform: "uppercase",
      color: "accent",
      "&:hover": {
        color: "primary",
      },
    },
  },
  buttons: {
    primary: {
      color: "text",
      bg: "primary_light",
      width: "100%",
      minWidth: "16em",
      maxWidth: "24em",
      px: 3,
      border: "1px solid white",
      fontFamily: "body",
      fontWeight: "bold",
      "&:hover": {
        bg: "primary",
      },
    },
    menu: {
      display: "none",
      width: "100%",
      height: "100%",
      "&:hover": {
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
      bg: "white",
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
};
export default myTheme;
