import React, { Component } from "react";
import axios from "axios";

export default class Instructors extends Component {
  state = {
    regions: [],
    instructors: []
  };

  componentDidMount() {
    axios
      .get("data.json")
      .then(res => {
        console.log(res);
        this.setState({ instructors: res.data.instructors });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    const { instructors } = this.state;

    return (
      <div>
        {instructors.map(({ name, bio, contact }) => (
          <div key={name}> {name} </div>
        ))}
      </div>
    );
  }
}
