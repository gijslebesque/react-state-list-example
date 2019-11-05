import React from "react";
import { Card } from "./Card";

const peopleArray = [
  {
    name: "Gijs",
    lastName: "Lebesque"
  },
  {
    name: "Guido",
    lastName: "Carucci"
  }
];

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      people: peopleArray
    };
  }
  deletePerson = index => {
    debugger;
    console.log(index);

    const peopleArray = [...this.state.people];
    const people = peopleArray.filter((person, i) => i !== index);
    this.setState({ people }, () => {
      debugger;
      this.props.history.push(`/about/${index}`);
    });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Hello welcome to home page</h1>

        {this.state.people.map((person, i) => (
          <Card
            key={i}
            person={person}
            index={i}
            deletePerson={this.deletePerson}
          />
        ))}
      </div>
    );
  }
}
