import React, { Component } from "react";
import ProjectDiv from "./ProjectDiv";

export default class Project extends Component {
  render() {
    return (
      <div>
        <h2>Project</h2>
        <ProjectDiv
          title={"Timetable Management System"}
          desc={
            "Desktop application for generating and managing Time-table"
          }
          tech={"C# | .Net Framework | Azure SQL | Metro Framework | VisualStudio "}
          gitLink={"http://bit.ly/TimeTableGit"}
        />
        <ProjectDiv
          title={"Online Shopping Cart System for a Fashion Store"}
          desc={
            "Full-stack application for the Online Fashion Store system developed, making the use of REST API technologies"
          }
          tech={
            "ReactJS | Node JS | HTML5 | CSS3 | Bootstrap | Express JS | MongoDB "
          }
          gitLink={"https://github.com/MilindaRanawaka/Fashion-Store"}
          liveLink={"https://afternoon-beyond-91179.herokuapp.com/"}
        />
        <ProjectDiv
          title={"Redesign Hemas Healthcare App"}
          desc={
            "Complete UI Redesign of Hemas Health Care Application."
          }
          tech={
            "Flutter"
          }
          gitLink={"https://github.com/MilindaRanawaka/HemasHealthApp"}
        />
        <ProjectDiv
          title={"Fire Alarm Monitoring System"}
          desc={
            "Fire Alarm Monitoring System contains RESTful web service, Fire Sensor app, Web Application, RMI Server and RMI Desktop Client, Mail and SMS Services."
          }
          tech={
            "ReactJS | Node JS | HTML5 | CSS3 | Bootstrap | MySQL | Java | Maven | Jersey"
          }
          gitLink={"https://bit.ly/Fire-Alarm"}
        />
        <ProjectDiv
          title={"Ticketing System for a Public Transport Network"}
          desc={
            "System that allow passengers to pay in advance and access public transport using digital technologies."
          }
          tech={
            "ReactJS | Node JS | HTML5 | CSS3 | Bootstrap | Express JS | MongoDB "
          }
          gitLink={"https://github.com/MilindaRanawaka/TicketingSystem"}
        />
        <ProjectDiv
          title={"COVID-19 Tracker"}
          desc={
            "Global and Sri Lankan COVID-19 Tracker using API provided by Health Promotion Bureau"
          }
          tech={"ReactJS | Node JS | HTML5 | CSS3 | Bootstrap | MySQL "}
          gitLink={
            "https://github.com/MilindaRanawaka/Covid-19-Sri-Lanka-and-Global-Tracker"
          }
          liveLink={
            "https://milindaranawaka.github.io/Covid-19-Sri-Lanka-and-Global-Tracker/"
          }
        />
        <ProjectDiv
          title={"School Management System"}
          desc={
            "Fully Functioning Windows Form Application for Managing School Activities."
          }
          tech={"C# | .Net Framework | Microsoft SQL Server | Visual Studio "}
          gitLink={"https://bit.ly/Sch-Mng-S"}
        />
        <ProjectDiv
          title={"Hostel Management System (STAY)"}
          desc={
            "A mobile application to Management of a hostel (STAY). Function including Room Management, Boarder Management, Leave Management, Food Management, Payment Management"
          }
          tech={"Java | Fire Base | Android Studio "}
          gitLink={"https://github.com/MilindaRanawaka/STAY"}
        />
        <ProjectDiv
          title={"Computer Spare Parts Management System"}
          desc={
            "A web-based system for Computer Shop for Manage their branches sales and stocks"
          }
          tech={"JSP servlet | My SQL | HTML | CSS "}
        />
        <ProjectDiv
          title={"Video Sharing Tool"}
          desc={
            "A website called Video for you(V4U) for video sharing where users can watch, like, share, comment and upload their own videos"
          }
          tech={"HTML | PHP | CSS | JavaScript | phpMyAdmin"}
        />
      </div>
    );
  }
}
