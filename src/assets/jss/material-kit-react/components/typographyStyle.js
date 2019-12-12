import {
  defaultFont,
  primaryColor,
  infoColor,
  successColor,
  warningColor,
  dangerColor
} from "assets/jss/material-kit-react.js";

const typographyStyle = {
  defaultFontStyle: {
    ...defaultFont,
    fontSize: "14px"
  },
  defaultHeaderMargins: {
    marginTop: "20px",
    marginBottom: "10px"
  },
  quote: {
    padding: "30px 35px",
    margin: "0 0 20px",
    fontSize: "20px",
    borderLeft: "5px solid #eee"
  },
  quoteText: {
    margin: "0 0 10px",
    fontSize: "18px",
    fontStyle: "italic",
    textAlign: "justify"
  },
  quoteAuthor: {
    display: "block",
    fontSize: "100%",
    lineHeight: "1.42857143",
    color: "#777",
    textAlign: "justify"
  },
  mutedText: {
    color: "#777"
  },
  primaryText: {
    color: primaryColor
  },
  infoText: {
    color: infoColor
  },
  successText: {
    color: successColor
  },
  warningText: {
    color: warningColor
  },
  dangerText: {
    color: dangerColor
  },
  smallText: {
    fontSize: "65%",
    fontWeight: "400",
    lineHeight: "1",
    color: "#777"
  }
};

export default typographyStyle;
