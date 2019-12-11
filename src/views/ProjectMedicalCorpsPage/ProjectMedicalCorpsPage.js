import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProblemStatementSection from "./Sections/ProblemStatementSection.js";
import SectionCarousel from "./Sections/SectionCarousel";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function ProjectMedicalCorpsPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="RIPAN HALDER"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/MedicalCorps/HomePage.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Medical Corps Management System</h1>
              <h4>
                This was a semester 1 major project under course Application Engineering & Development - JAVA, SWING & dbo4
              </h4>
              <br />
              <Button
                color="github"
                size="lg"
                href="https://github.com/RipanHalder/MedicalCorpsManagementSystem"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={"fab fa-github"} />
                Git Hub
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        
          <ProblemStatementSection />
          <SectionCarousel />
      </div>
      <Footer />
    </div>
  );
}
