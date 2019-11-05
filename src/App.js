import React, { Component } from "react";
import "./App.css";
import { Card } from "./components/Card";
import Modal from "./components/Modal";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/NavBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      amountClicked: 0,

      showModal: false
    };
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

  // Toggle modal changes the boolean value of the state.
  // The boolean value is only used for conditional rendering of an element.
  // So after the state is set react will call the render method witht he changed value.
  // Have at the end of the render function how the condition rendering is implemented.
  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  //This function is passed a prop in order to retrieve the state of the Modal component.
  addPerson = person => {
    //the person parameter is the state of Modal, and is used to update App's state.
    this.setState({
      people: this.state.people.concat(person),
      showModal: false
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about/:name" component={About} />
        </Switch>

        <button onClick={this.toggleModal}>Toggle element</button>
        {this.state.showModal && (
          <Modal toggleModal={this.toggleModal} addPerson={this.addPerson} />
        )}
      </div>
    );
  }
}

export default App;
