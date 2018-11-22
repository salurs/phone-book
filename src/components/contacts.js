import React, { Component } from "react";
import List from "./list";
import Form from "./form";

class Contacts extends Component {
  render() {
    return (
      <div>
        <List contacts={this.props.contacts} />
        <Form />
      </div>
    );
  }
}

export default Contacts;
