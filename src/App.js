import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Card } from "./components/Card";

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

class App extends Component {
  constructor() {
    super();
    this.state = {
      amountClicked: 0,
      people: peopleArray
    };
    // this.onClickHandler = this.onClickHandler.bind(this);
  }

  //Event handler
  onClickHandler = () => {
    //Update state
    this.setState({ amountClicked: this.state.amountClicked + 1 });
  };

  listOfPeople = () => {
    return this.state.people.map((person, key) => {
      return <Card key={key} person={person} />;
    });
  };

  deletePerson = index => {
    console.log(index);
    const peopleArray = [...this.state.people];

    const people = peopleArray.filter((person, i) => i !== index);

    this.setState({ people });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        {/* Attach event handler */}
        <button onClick={this.onClickHandler}>
          {/* Show state */}
          {this.state.amountClicked}
        </button>
        {/* Show a card with props */}

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

export default App;
