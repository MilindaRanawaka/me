import React from "react";

export default class AboutConfig extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      LINK_ABOUT: "active",
      LINK_EDUCATION: "",
      LINK_SKILL: "",
      LINK_PROJECT: "",
      LINK_CONTACT: "",
    };
  }

  render() {
    return this.state.LINK_ABOUT;
  }
}
