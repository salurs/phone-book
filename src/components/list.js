import React, { Component } from "react";
import "./list.css";

class List extends Component {
  state = {
    filterText: ""
  };
  onChangeFilterText = e => {
    this.setState({
      filterText: e.target.value
    });
  };
  render() {
    const filterContacts = this.props.contacts.filter(contact => {
      return (
        contact.name
          .toLowerCase()
          .indexOf(this.state.filterText.toLowerCase()) !== -1
      );
    });
    return (
      <div className="listArea">
        <input
          type="text"
          name={"filter"}
          id={"filter"}
          value={this.state.filterText}
          onChange={this.onChangeFilterText}
          placeholder={"İsim yada numara ara"}
        />
        <ul className="list">
          {filterContacts.map(contact => {
            return (
              <li key={contact.phone}>
                <span className="name">{contact.name}</span>
                <span className="phone">{contact.phone}</span>
                <span className="clearfix" />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default List;
