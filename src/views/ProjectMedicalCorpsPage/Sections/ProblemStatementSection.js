import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import ImageIcon from '@material-ui/icons/Image';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import imageDesign from "assets/img/MedicalCorps/Design Use Case.png";
import imageObjectModel from "assets/img/MedicalCorps/Object Model.png";

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";

const useStyles = makeStyles(styles);

export default function ProblemStatementSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <div className={classes.title}>
            <h2>Medical Corps Management System</h2>
          </div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <NavPills
                color="success"
                horizontal={{
                  tabsGrid: { xs: 12, sm: 2, md: 2 },
                  contentGrid: { xs: 12, sm: 10, md: 10 }
                }}
                tabs={[
                  {
                    tabButton: "Problem Statement",
                    tabIcon: Dashboard,
                    tabContent: (
                      <span>
                        <p>
                        At field locations, the army needs staying in bunkers and tents as 
                        their camps are located in remote parts of the country.
                        </p>
                        <br />
                        <p>
                        Sporadically, they are deprived of essential facilities such as hospitals and medications. 
                        </p>
                        <br />
                        <p>
                        During such times, it becomes critical for the Medical Corps to ensure that 
                        no soldier is left unattended and proper medication  and treatment is provided as and when required.
                        </p>
                        <br />
                        <p>
                        This application is built with an aim to assist the Medical Corps of the US Army 
                        to arrange medical facilities and address  their needs in exercise/field areas for armed forces 
                        camps under their jurisdictions. 
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Approach following",
                    tabIcon: DirectionsWalkIcon,
                    tabContent: (
                      <span>
                        <ul>
                          <li>
                          The nurse from every Military Camp will take care of unwell soldiers(patients).
                          </li>
                          <li>The nurse can admit patients to the Camp Medical room.</li>
                          <li>The Nurse can also request the following to the Camp Commandant alerted via email too:
                          </li>
                            <ol><li>
                            Beds
                              </li>
                              <li>Medical Supplies </li>
                              <li>Apply Leave</li></ol>
                          <li>In case of Emergencies the nurse can directly contact the  Doctors at the Medical Camps alerted via SMS</li>
                          <ol><li>Extra Medical Staff  </li><li>Beds</li></ol>
                          <li>The Camp commandant will further send requests to Medical Camp Doctors or food Suppliers:</li>
                          <ol><li>Relieving Nurse </li><li>Medical Supplies for the Camp </li><li>Moving patients to Medical Camp</li></ol>
                          <li>They are also responsible for requesting Food Supplies from Food Supplier and managing the Camps Food Inventory.</li>
                          <li>The Camp Commandant can also see the analysis for his Camp referring to a dashboard.</li>
                          <li>He can also refer to maps to see his location and locations of nearby medical camps.</li>
                          <li>The Doctor will process all the request forwarded by Camp Commandant and emergency requests forwarded by Nurse.</li>
                          <li>Apart from that he can manage bookings for resident patients.</li>
                          <li>He is also responsible for managing the inventory for medical supplies and request the same from medical suppliers.</li>
                          <li>The food Suppliers addresses the requests from Camp Commandants and supplies items from their own inventory.</li>
                          <li>The medical Suppliers addresses the requests from Doctors and supplies items from their own inventory.</li>
                        </ul>
                      </span>
                    )
                  },
                  {
                    tabButton: "Design / Use Case",
                    tabIcon: ImageIcon,
                    tabContent: (
                      <img
                      src={imageDesign}
                      alt="..."
                      className={
                        classes.imgRaised +
                        " " +
                        classes.imgRounded +
                        " " +
                        classes.imgFluid
                      }
                    />
                    )
                  },
                  {
                    tabButton: "Object Model",
                    tabIcon: CropOriginalIcon,
                    tabContent: (
                      <img
                      src={imageObjectModel}
                      alt="..."
                      className={
                        classes.imgRaised +
                        " " +
                        classes.imgRounded +
                        " " +
                        classes.imgFluid
                      }
                    />
                    )
                  }
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
