import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Card extends Component {
  render() {
    const { name, lastName } = this.props.person;
    return (
      <div>
        <Link to={`/about/${name}`}>
          {name} {lastName}
        </Link>
        <button onClick={() => this.props.deletePerson(this.props.index)}>
          Delete
        </button>
      </div>
    );
  }
}
