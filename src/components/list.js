import React, { Component } from "react";
import "./list.css";

class List extends Component {
  state = {};
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
          <li>
            <span className="name">Orhan SALUR</span>
            <span className="phone">0777 777 77 77</span>
            <span className="clearfix" />
          </li>
          <li>
            <span className="name">Adnan ELTER</span>
            <span className="phone">0666 666 66 66</span>
            <span className="clearfix" />
          </li>
          <li>
            <span className="name">Yunus AY</span>
            <span className="phone">0555 555 55 55</span>
            <span className="clearfix" />
          </li>
        </ul>
      </div>
    );
  }
}

export default List;
