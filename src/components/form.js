import React, { Component } from "react";

class Form extends Component {
  state = {};
  render() {
    return (
      <div>
        <form>
          <input name="name" id="name" placeholder="İsim Girin" />
          <br />
          <input name="phone" id="phone" placeholder="Numara Girin" />
          <button>Ekle</button>
        </form>
      </div>
    );
  }
}

export default Form;
