import {
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  cyan50,
  cyan100,
  cyan200,
  cyan300,
  cyan400,
} from "assets/jss/material-kit-react.js";

const customLinearProgressStyle = {
  root: {
    height: "4px",
    marginBottom: "20px",
    overflow: "hidden",
    left: 0,
    bottom : 0
  },
  bar: {
    height: "4px",
    // position: "fixed"
  },
  primary: {
    backgroundColor: primaryColor
  },
  warning: {
    backgroundColor: warningColor
  },
  danger: {
    backgroundColor: dangerColor
  },
  success: {
    backgroundColor: successColor
  },
  info: {
    backgroundColor: infoColor
  },
  rose: {
    backgroundColor: roseColor
  },
  gray: {
    backgroundColor: grayColor
  },
  cyan50:{
    backgroundColor: cyan50
  },
  cyan100:{
    backgroundColor: cyan100
  },
  cyan200:{
    backgroundColor: cyan200
  },
  cyan300:{
    backgroundColor: cyan300
  },
  cyan400:{
    backgroundColor: cyan400
  },
  primaryBackground: {
    background: "rgba(156, 39, 176, 0.2)"
  },
  warningBackground: {
    background: "rgba(255, 152, 0, 0.2)"
  },
  dangerBackground: {
    background: "rgba(244, 67, 54, 0.2)"
  },
  successBackground: {
    background: "rgba(76, 175, 80, 0.2)"
  },
  infoBackground: {
    background: "rgba(0, 188, 212, 0.2)"
  },
  roseBackground: {
    background: "rgba(233, 30, 99, 0.2)"
  },
  grayBackground: {
    background: "rgba(221, 221, 221, 0.2)"
  }
};

export default customLinearProgressStyle;
