import React, { Component } from "react";
import List from "./list";
import Form from "./form";

class Contacts extends Component {
  state = {};
  render() {
    return (
      <div>
        <List />
        <Form />
      </div>
    );
  }
}

export default Contacts;
