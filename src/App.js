import React from "react";
import "./App.css";
import "./App2.css";
import Main from "./Components/Main";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: true,
      status: "",
      toggleBtn: "fa fa-bars",
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu = function () {
    if (this.state.showMenu) {
      this.setState({
        status: "active",
        toggleBtn: "fas fa-times",
      });
    } else {
      this.setState({
        status: "",
        toggleBtn: "fa fa-bars",
      });
    }
    this.setState({ showMenu: !this.state.showMenu });
  };

  render() {
    return (
      <div className="wrapper d-flex align-items-stretch">
        <nav id="sidebar" className={this.state.status}>
          <div className="p-4 pt-5">
            <a
              href="/me/#/"
              className="img logo rounded-circle mb-5 custom-logoimg"
            >
              <i className={`fa`} aria-hidden="true" />
            </a>
            <ul className="list-unstyled components mb-5">
              <li className="">
                <a href="/me/#/">About</a>
              </li>
              <li>
                <a href="/me/#/education">Education</a>
              </li>
              <li>
                <a href="/me/#/skills">Skills</a>
              </li>
              <li>
                <a href="/me/#/projects">Projects</a>
              </li>
              {/*}
                <li>
                  <a href="/contacts">Contact</a>
                </li>
                {*/}
            </ul>

            <div className="footer">
              <p></p>
            </div>
          </div>
        </nav>

        <div id="content" className="p-4 p-md-5">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <button
                type="button"
                id="sidebarCollapse"
                onClick={this.toggleMenu}
                className="btn btn-primary side-toggle-btn"
              >
                <i className={this.state.toggleBtn} />
                <span className="sr-only">Toggle Menu</span>
              </button>
              <button
                className="btn btn-dark d-inline-block d-lg-none ml-auto"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fa fa-bars" />
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="nav navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="/me/#/">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/me/#/education">
                      Education
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/me/#/skills">
                      Skills
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/me/#/projects">
                      Projects
                    </a>
                  </li>
                  {/*}
                    <li className="nav-item">
                      <a className="nav-link" href="/contacts">Contact</a>
                    </li>
                    {*/}
                </ul>
              </div>
            </div>
          </nav>

          <Main />
        </div>
      </div>
    );
  }
}
