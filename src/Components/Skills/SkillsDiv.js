import React, { Component } from 'react';

class SkillCard extends Component {
    render() {
        return (
            <div className="d-inline-block shadow-sm p-3 mb-5 bg-white rounded skill-ico-div">

                <i className={`${this.props.icon}`} />
                <p>{this.props.name}</p>

            </div>
        );
    }
}

export default SkillCard;