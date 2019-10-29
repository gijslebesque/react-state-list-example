import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Card } from "./components/Card";
import Modal from "./components/Modal";

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
      people: peopleArray,
      toggleModal: false
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

  toggleModal = () => {
    this.setState({ toggleModal: !this.state.toggleModal });
  };

  addPerson = person => {
    this.setState({ people: this.state.people.concat(person) });
    this.toggleItem();
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

        {this.state.people.map((person, i) => (
          <Card
            key={i}
            person={person}
            index={i}
            deletePerson={this.deletePerson}
          />
        ))}
        <button onClick={this.toggleItem}>Toggle element</button>
        {this.state.toggleModal && (
          <Modal toggleModal={this.toggleModal} addPerson={this.addPerson} />
        )}
      </div>
    );
  }
}

export default App;
