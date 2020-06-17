import React, { Component } from "react";

export default class Education extends Component {
  render() {
    return (
      <div>
        <h2>Education</h2>
        <div className="shadow p-3 mb-5 bg-white rounded edu-box">
          <div className="resume-content">
            <p className="mb-3 edu-info">
              <strong>
                BSc (Hons) in Information Technology Specialising in Software
                Engineering
              </strong>
            </p>
            <div className="mb-2 h5">
              Sri Lanka Institute of Information Technology - SLIIT
            </div>
            <h6>GPA: 3.68</h6>
            <div className="resume-date text-md-left">
              <span className="text-primary">2017 - Present</span>
            </div>
          </div>
        </div>
        <div className="shadow p-3 mb-5 bg-white rounded edu-box">
          <div className="resume-content">
            <p className="mb-3 edu-info">
              <strong>Rahula College - Matara</strong>
            </p>
            <div className="mb-2 h5">O/L - 2014 | A/L - 2017</div>
            <h6 className="invisible">GPA: 3.68</h6>
            <div className="resume-date text-md-left">
              <span className="text-primary">2002 - 2017</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//End of file
