import React, { Component } from "react";
import axios from "axios";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://api.npms.io/v2/search?q=react")
      .then(response => console.log(response.data));
  }
  render() {
    return (
      <>
        <h1>Hello</h1>
        <h1>Hello</h1>
      </>
    );
  }
}
