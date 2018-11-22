import React, { Component } from "react";
import PropTypes from "prop-types";
import "./list.css";

class List extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired
  };
  render() {
    return (
      <div className="listArea">
        <input
          type="text"
          name={"filter"}
          id={"filter"}
          placeholder={"İsim yada numara ara"}
        />
        <ul className="list">
          {this.props.contacts.map(contact => {
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
