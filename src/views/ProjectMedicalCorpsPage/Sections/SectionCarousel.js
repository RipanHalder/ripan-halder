import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import image1 from "assets/img/MedicalCorps/HomePage.jpg";
import image2 from "assets/img/MedicalCorps/EnterpriseTypes.jpg";
import image3 from "assets/img/MedicalCorps/AddEnterpriseAdmins.jpg";
import image4 from "assets/img/MedicalCorps/SysAdminHomepage.jpg";
import image5 from "assets/img/MedicalCorps/AFAdminHomePage.jpg";
import image6 from "assets/img/MedicalCorps/AddingAFOrgs.jpg";
import image7 from "assets/img/MedicalCorps/AddingAFEmployees.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={image1} alt="HomePage" className="slick-image" />
                  <div className="slick-caption">
                    <h3>
                      Launch Page
                    </h3>
                  </div>
                </div>
                <div>
                  <img src={image4} alt="SysAdminHomepage" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                    System Admin Homepage
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image2} alt="EnterpriseTypes" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                    Enterprise Types
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image3} alt="AddEnterpriseAdmins" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                    Add Enterprise Admins
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image5} alt="AFAdminHomePage" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                    Armed Forces Admin Home Page
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image6} alt="AddingAFOrgs" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                    Adding Armed Forces Organizations
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image7} alt="AddingAFEmployees" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                    Adding Armed Forces Employees to their respective Organizations
                    </h4>
                  </div>
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
