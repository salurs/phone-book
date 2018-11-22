import React from "react";
import List from "./list";
import Form from "./form";
import PropTypes from "prop-types";

const Contacts = props => (
  <div>
    <List contacts={props.contacts} />
    <Form addContact={props.addContact} />
  </div>
);
Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  addContact: PropTypes.func
};
export default Contacts;
