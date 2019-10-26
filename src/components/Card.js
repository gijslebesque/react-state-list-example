import React, { Component } from "react";

export class Card extends Component {
  render() {
    const { name, lastName } = this.props.person;
    return (
      <div>
        <p>
          Hello {name} {lastName}
        </p>
        <button onClick={() => this.props.deletePerson(this.props.index)}>
          Delete
        </button>
      </div>
    );
  }
}
