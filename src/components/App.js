import React, { Component } from "react";
import "../App.css";
import Contacts from "./contacts";

class App extends Component {
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
      <div className="App">
        <Contacts contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
