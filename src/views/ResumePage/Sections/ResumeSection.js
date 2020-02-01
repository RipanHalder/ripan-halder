import React from "react";
import resumeData from '../../../assets/resumeData';
import '../../../assets/css/resumeStyle.css';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";
const useStyles = makeStyles(styles);

export default function ResumeSection() {
    const classes = useStyles();
    return (
      <div className={classes.container}>
        <section id="resume">
            <div className="row work">
                <div className="three columns header-col">
                    <h1><span>Work</span></h1>
                </div>

                <div className="nine columns main-col">
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
                                        <p>
                                        {/* <li key={item.Achievements}></li> */}
                                        <ul>{ achievements }</ul>

                                        </p>
                                    </div>

                                </div>

                            )
                        })
                    }
                </div>
            </div>
            <div className="row education">

                <div className="three columns header-col">
                    <h1><span>Education</span></h1>
                </div>

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
            </div>

            <div className="row skill">
                <div className="three columns header-col">
                    <h1><span>Skills</span></h1>
                </div>

                <div className="nine columns main-col">
                        <div><p>
                            <table >
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
                                    <td className="td-content">Graph API, Elastic Search</td>
                                </tr>
                                <tr>
                                    <td className="td-title">Methodologies</td>
                                    <td className="td-content">Agile, Waterfall</td>
                                </tr>
                                <tr>
                                    <td className="td-title">IDEs</td>
                                    <td className="td-content">Visual Studio Code, IntelliJ, Eclipse, Netbeans, X-Code, MATLAB</td>
                                </tr>
                            </table>
                            </p>
                        </div>
                </div>

            </div>

        </section>
        </div>
    );
}
