import React from "react";

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

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: []
    };
  }

  componentDidMount() {
    //setState based on the param in my url.
    const { name } = this.props.match.params;
    const currentUser = peopleArray.filter(person => person.name === name);
    this.setState({ person: currentUser });

    debugger;
  }

  render() {
    console.log(this.state);
    debugger;
    return (
      <div>
        <h1>This is the about page of </h1>
        {this.state.person.map(person => {
          return (
            <p>
              {person.name} {person.lastName}
            </p>
          );
        })}
      </div>
    );
  }
}
