import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
// @material-ui/icons
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Close from "@material-ui/icons/Close";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';
import Topic1  from "assets/img/school/std 5/Kaato Mei Raah Banate Hai.jpeg";

import profile from "assets/img/Beauty-Halder.jpg";

// import school1 from "assets/img/lifelines/school-1.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

import ReactGA from 'react-ga';

const useStyles = makeStyles(styles);
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });
  
  Transition.displayName = "Transition";

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const [classicModal, setClassicModal] = React.useState(false);
  initializeReactGA();
  return (
    <div className="wrapper">
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
                    <h3 className={classes.title}>Beauty Halder</h3>
                    <h6>Vidyaniketan Academy, Shrirampur</h6>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                This page has the recordings for Hindi subject for Std 5th. {" "}
              </p>
            </div>
            <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4} className={classes.navWrapper}>
                <Button
                  color="primary"
                  block
                  onClick={() => setClassicModal(true)}
                >
                  <LibraryBooks className={classes.icon} />
                  Kaato Mei Raah Banate Hai
                </Button>
                <Dialog
                  classes={{
                    root: classes.center,
                    paper: classes.modal
                  }}
                  open={classicModal}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={() => setClassicModal(false)}
                  aria-labelledby="classic-modal-slide-title"
                  aria-describedby="classic-modal-slide-description"
                >
                  <DialogTitle
                    id="classic-modal-slide-title"
                    disableTypography
                    className={classes.modalHeader}
                  >
                    <IconButton
                      className={classes.modalCloseButton}
                      key="close"
                      aria-label="Close"
                      color="inherit"
                      onClick={() => setClassicModal(false)}
                    >
                      <Close className={classes.modalClose} />
                    </IconButton>
                    <h4 className={classes.modalTitle}>Kaato Mei Raah Banate Hai</h4>
                  </DialogTitle>
                  <DialogContent
                    id="classic-modal-slide-description"
                    className={classes.modalBody}
                  >
                    <img
                        src={Topic1}
                        alt="..."
                        className={
                        classes.imgRaised +
                        " " +
                        classes.imgRounded +
                        " " +
                        classes.imgFluid
                        }
                    />
                  </DialogContent>
                  <DialogActions className={classes.modalFooter}>
                    <Button
                      onClick={() => setClassicModal(false)}
                      color="danger"
                      simple
                    >
                      Close
                    </Button>
                  </DialogActions>
                </Dialog>
                </GridItem>

            <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <AudioPlayer
                    src="https://ripanhalderblobstorage.blob.core.windows.net/audio/STD 5 - Kaato Mei Rah Bante Hai.mp4"
                    onPlay={e => console.log("onPlay")}
                    // other props here
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </div>
  );
}


function initializeReactGA() {
  ReactGA.initialize('UA-157875068-1');
  ReactGA.pageview('/');
}