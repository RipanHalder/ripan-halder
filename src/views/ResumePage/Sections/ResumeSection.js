import React from "react";
import resumeData from '../../../assets/resumeData';
import '../../../assets/css/resumeStyle.css';

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";
const useStyles = makeStyles(styles);

export default function ResumeSection() {
    const classes = useStyles();
    return (
      <div className={classes.container}>
        <section id="resume">
            <div className="row education">
            <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={2}>

                <div className="three columns header-col">
                    <h1><span>Education</span></h1>
                </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={10}>
                <div className="nine columns main-col">
                    {
                        resumeData.education && resumeData.education.map((item) => {
                            return (
                                <div className="row item">
                                    <div className="twelve columns">
                                        <div className="title">{item.UniversityName}
                                        <span className="location"><em>, {item.location}</em></span>
                                            </div>
                                        <p className="info">
                                            <em>
                                            {item.specialization}
                                            <span>&bull;</span> {item.YearOfPassing}
                                            <span>&bull;</span> Grade: {item.Grade}</em>
                                            </p>
                                        <p>
                                            {item.Achievements}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                </GridItem>
                </GridContainer>
            </div>
            <div className="row work">
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={2}>
                    <h1><span>Work</span></h1>
                </GridItem>
                <GridItem xs={12} sm={12} md={10}>
                    {
                        resumeData.work && resumeData.work.map((item) => {
                            let achievements = item.Achievements.map(function(name){
                                return <li>{name}</li>;
                              })
                            return (
                                <div className="row item">
                                    <div className="twelve columns">
                                    <div className="title">{item.CompanyName}
                                        <span className="location"><em>, {item.location}</em></span>
                                    </div>
                                        <p className="info">
                                            {item.specialization}
                                            <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>

                                        <ul>{ achievements }</ul>
                                    </div>

                                </div>

                            )
                        })
                    }
                </GridItem>
                </GridContainer>
            </div>

            <div className="row skill">

            <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={2}>
                <div className="three columns header-col">
                    <h1><span>Skills</span></h1>
                </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={10}>
                <div className="nine columns main-col">
                        <div>
                            <table >
                                <thead></thead><tbody>
                                <tr>
                                    <td className="td-title">Programming Languages</td>
                                    <td className="td-content">Java, JavaScript, Swift, Python, Shell Scripting, C#</td>
                                </tr>
                                <tr>
                                    <td className="td-title">Web Technologies</td>
                                    <td className="td-content">NodeJS, Express, React, Angular, JSP, HTML, CSS, SASS, Bootstrap</td>
                                </tr>
                                <tr>
                                    <td className="td-title">Databases</td>
                                    <td className="td-content">MongoDB, MSSQL, MySQL, PostgreSQL, MariaDB, Redis</td>
                                </tr>
                                <tr>
                                    <td className="td-title">Standards and Frameworks</td>
                                    <td className="td-content">Spring Boot, Spring MVC, Hibernate, Servlets, JDBC, .Net Framework, Swing, JSON, XML</td>
                                </tr>
                                <tr>
                                    <td className="td-title">Azure Cloud Technologies</td>
                                    <td className="td-content">App Services, Storage Containers, CI/CD, Docker, Service Bus, Firewall, Front Door, Cognitive Search</td>
                                </tr>
                                <tr>
                                    <td className="td-title">AWS Cloud Technologies</td>
                                    <td  className="td-content">Lambda, EC2, S3, SNS, SES, RDS, Cloud Formation, Teraform, CircleCI, TravisCI</td>
                                </tr>
                                <tr>
                                    <td className="td-title">Other Technologies</td>
                                    <td className="td-content">Microsoft Graph API, Elastic Search</td>
                                </tr>
                                <tr>
                                    <td className="td-title">Methodologies</td>
                                    <td className="td-content">Agile, Waterfall</td>
                                </tr>
                                <tr>
                                    <td className="td-title">IDEs</td>
                                    <td className="td-content">Visual Studio Code, IntelliJ, Eclipse, Netbeans, X-Code, MATLAB</td>
                                </tr></tbody>
                            </table>
                        </div>
                </div>
                </GridItem>
            </GridContainer>
            </div>
        </section>
        </div>
    );
}
