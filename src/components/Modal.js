import React, { Component } from "react";

export default class Modal extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      lastName: ""
    };
  }

  // Generic event handler added to input fields onChange event.
  // name is an html attribute of the input field and should reflect the a property in this.state.
  onChangeHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  //On the submit event we lift the Modal's state up and do something with it in App.
  submitHandler = e => {
    e.preventDefault();
    this.props.addPerson(this.state);
  };

  render() {
    console.log(this.state);
    return (
      <div className="modal is-active">
        <div
          className="modal-background"
          onClick={this.props.toggleModal}
        ></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Modal title</p>
            <button className="delete" aria-label="close"></button>
          </header>
          <form onSubmit={this.submitHandler}>
            <section className="modal-card-body">
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    name="name"
                    value={this.state.name}
                    onChange={e => {
                      this.onChangeHandler(e);
                    }}
                    className="input"
                    type="text"
                    placeholder="Name"
                  />

                  <input
                    name="lastName"
                    value={this.state.lastName}
                    onChange={e => {
                      this.onChangeHandler(e);
                    }}
                    className="input"
                    type="text"
                    placeholder="Last name"
                  />
                </div>
              </div>
            </section>
            <footer className="modal-card-foot">
              <button type="submit" className="button is-success">
                Save changes
              </button>
              <button onClick={this.props.toggleModal} className="button">
                Cancel
              </button>
            </footer>
          </form>
        </div>
      </div>
    );
  }
}
