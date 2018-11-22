import React, { Component } from "react";
import "../App.css";
import Contacts from "./contacts";

class App extends Component {
  constructor(props) {
    super(props);
    this.addContact = this.addContact.bind(this);
  }
  state = {
    contacts: [
      {
        name: "Orhan SALUR",
        phone: "0777 777 77 77"
      },
      {
        name: "Adnan ELTER",
        phone: "0666 666 66 66"
      },
      {
        name: "Yunus AY",
        phone: "0555 555 55 55"
      }
    ]
  };
  addContact(contact) {
    const { contacts } = this.state;
    contacts.push(contact);
    this.setState({
      contacts: contacts
    });
  }
  render() {
    return (
      <div className="App">
        <Contacts addContact={this.addContact} contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
