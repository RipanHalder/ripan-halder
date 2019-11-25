import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import PaletteIcon from '@material-ui/icons/Palette';
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import Tooltip from "@material-ui/core/Tooltip";

import profile from "assets/img/ripan-halder-headshot.png";

import project1 from "assets/img/projects/ios-app.jpg";
import project2 from "assets/img/projects/game-rental.jpg";
import project3 from "assets/img/projects/medical-corp.jpg";
import project4 from "assets/img/projects/donation-handout.jpg";
import nilayAna1 from "assets/img/lifelines/nilay-ana-1.jpg";
import bb1 from "assets/img/lifelines/bb-1.jpg";
import bb2 from "assets/img/lifelines/bb-2.jpg";
import ahold1 from "assets/img/lifelines/ahold-1.jpg";
import mb1 from "assets/img/lifelines/mb-1.jpg";
import mb2 from "assets/img/lifelines/mb-2.jpg";
import flat331 from "assets/img/lifelines/flat33-1.jpg";
import brit1 from "assets/img/lifelines/brit-1.jpg";
import fam1 from "assets/img/lifelines/family-1.png";
// import school1 from "assets/img/lifelines/school-1.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="RIPAN HALDER"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Ripan Halder</h3>
                    <h6>Software Developer</h6>
                    <Button href="https://github.com/ripanhalder"
                    target="_blank"
                    rel="noopener noreferrer"
                     justIcon link className={classes.margin5}>
                      <i className={"fab fa-github"} />
                    </Button>
                    <Button href="https://www.linkedin.com/in/ripanhalder/"
                    target="_blank"
                    rel="noopener noreferrer"
                     justIcon link className={classes.margin5}>
                      <i className={"fab fa-linkedin"} />
                    </Button>
                    <Button href="https://www.instagram.com/ripan_halder/"
                      target="_blank" 
                      rel="noopener noreferrer"
                      justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button href="https://www.facebook.com/ripan.halder"
                      target="_blank"
                      rel="noopener noreferrer"
                      justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                A coder of substantial diversity and a cricketer by heart. Loves bollywood music and zealous
                towards mobile gaming. Passionate in this agile world and keen learner on weekends. {" "}
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={10} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Projects",
                      tabIcon: CloudUploadIcon,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={5}>
                          <Tooltip
                              id="ios-app"
                              title="View Github"
                              placement={window.innerWidth > 959 ? "top" : "left"}
                              classes={{ tooltip: classes.tooltip }}
                            >
                              <a href="https://github.com/RipanHalder"
                                target = "_blank"
                                rel="noopener noreferrer"
                                className={classes.anchor}>
                            <img
                              alt="..."
                              src={project1}
                              className={navImageClasses}
                            />
                            <h6>Events Finder - iOS App</h6></a></Tooltip>
                            <Tooltip
                              id="game-rental-app"
                              title="View App Deployed on Heroku"
                              placement={window.innerWidth > 959 ? "top" : "left"}
                              classes={{ tooltip: classes.tooltip }}
                            >
                              <a href="https://github.com/RipanHalder"
                                target = "_blank"
                                rel="noopener noreferrer">
                            <img
                              alt="Game Rental Web Application - Spring MVC, Hibernate, MySQL"
                              src={project2}
                              className={navImageClasses}
                            /><h6>Game Rental Web Application - Spring MVC, Hibernate, MySQL</h6></a>
                          </Tooltip>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={5}>
                          <Tooltip
                              id="medical-corps-app"
                              title="View Github"
                              placement={window.innerWidth > 959 ? "top" : "left"}
                              classes={{ tooltip: classes.tooltip }}
                            >
                              <a href="https://github.com/RipanHalder"
                                target = "_blank" 
                                rel="noopener noreferrer">
                            <img
                              alt="..."
                              src={project3}
                              className={navImageClasses}
                            />
                            <h6>Medical Corps Management System, Java, Swing</h6>
                            </a></Tooltip>
                            <Tooltip
                              id="donation-handout-app"
                              title="View App Deployed on Herokub"
                              placement={window.innerWidth > 959 ? "top" : "left"}
                              classes={{ tooltip: classes.tooltip }}
                            >
                              <a href="https://github.com/RipanHalder"
                                target = "_blank" 
                                rel="noopener noreferrer">
                            <img
                              alt="..."
                              src={project4}
                              className={navImageClasses}
                            />
                            <h6>Donation Handout, MEAN stack</h6>
                            </a></Tooltip>
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Lifelines",
                      tabIcon: Camera,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={nilayAna1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={bb1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={ahold1}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={fam1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={mb1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={mb2}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={flat331}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={bb2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={brit1}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Work",
                      tabIcon: PaletteIcon,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            {/* <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work5}
                              className={navImageClasses}
                            /> */}
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Skills",
                      tabIcon: PlaylistAddCheckIcon,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            
                          </GridItem>
                        </GridContainer>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
