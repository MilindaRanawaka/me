import React, { Component } from 'react';

export default class ProjectDiv extends Component {
    render() {
        return (
            <div>
                <div className="shadow p-3 mb-5 bg-white rounded edu-box">
                    <div className="resume-content">
                        <p className="mb-3 edu-info"><strong>{this.props.title}</strong></p>
                        <div className="mb-2" style={{"fontSize": "16px"}}>{this.props.desc}</div>
                        <h6 style={{"fontSize": "14px"}}>Technologies Used: {this.props.tech} </h6>
                        <div className="resume-date text-md-left">
                            {
                                this.props.gitLink &&
                                <span className="text-primary">GitHub: <a target="_blank" href={this.props.gitLink}><b>{this.props.gitLink}</b></a></span>
                            }
                            <br/>
                            {
                                this.props.liveLink &&
                                <span className="text-primary">Live Version: <a target="_blank" href={this.props.liveLink}><b>{this.props.liveLink}</b></a></span>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}