import React, { Component } from "react";

export class Card extends Component {
  render() {
    const { name, lastName } = this.props.person;
    return (
      <div>
        <p>
          Hello {name} {lastName}
        </p>
      </div>
    );
  }
}
