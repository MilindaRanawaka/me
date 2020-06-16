import React, { Component } from 'react';

export default class About extends Component {

    render() {
        return (
            <div>
                <div>
                    <h2 className="mb-4">Milinda Ranawaka</h2>
                    <h6><i className="fa fa-map-pin"/> Matara, Sri Lanka</h6>
                    <h6>
                        <i className="fa fa-phone"/> (+94) 77 660 3675 | (+94) 70 584 0861
                    </h6>
                    <h6>
                        <a href="mailto:milindaranawaka@gmail.com">
                            <i className="fa fa-envelope"/> milindaranawaka@gmail.com
                        </a>
                    </h6>
                    <h6>
                        <a href="mailto:it18018288@my.sliit.lk">
                            <i className="fa fa-envelope"/> it18018288@my.sliit.lk
                        </a>
                    </h6>
                </div>
                <br/>
                <div>
                    <h5>
                        Problem solver, Leader, Tech Enthusiast{/*}, A student who seeks opportunities to enhance and share knowledge in any possible.{*/}
                    </h5>

                    <a href="https://www.linkedin.com/in/milinda-ranawaka-5303a5185/" type="button" className="btn btn-primary social-link">
                        <i className="fa fa-linkedin"/>
                        <span className="sr-only">LinkedIn</span>
                    </a>

                    <a href="https://github.com/MilindaRanawaka" type="button" className="btn btn-primary social-link">
                        <i className="fa fa-github"/>
                        <span className="sr-only">GitHub</span>
                    </a>

                    <a href="https://medium.com/@milindaranawaka" type="button" className="btn btn-primary social-link">
                        <i className="fa fa-medium"/>
                        <span className="sr-only">Medium</span>
                    </a>

                    <a href="https://www.instagram.com/milindaranawaka" type="button" className="btn btn-primary social-link">
                        <i className="fa fa-instagram"/>
                        <span className="sr-only">Instagram</span>
                    </a>
                </div>
            </div>
        );
    }
}