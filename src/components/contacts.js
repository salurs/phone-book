import React, { Component } from "react";
import List from "./list";
import Form from "./form";

class Contacts extends Component {
  state = {
    contacts: [
      {
        name: "Orhan SALUR",
        phone: "0777 777 77 77"
      },
      {
        name: "Adnan ELTER",
        phone: "0666 666 66 66"
      }
    ]
  };
  render() {
    return (
      <div>
        <List contacts={this.state.contacts} />
        <Form />
      </div>
    );
  }
}

export default Contacts;
