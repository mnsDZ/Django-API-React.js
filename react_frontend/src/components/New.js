import React, { Component } from "react";
import { render } from "react-dom";

class New extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch("events/api")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState(() => {
          return {
            data,
            loaded: true
          };
        });
      });
  }

  render() {
    return (
     <div>
        {this.state.data.map(events => {
          return (
            <div>
                <h1>{events.country} {events.brand} {events.staff}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default New;

const container = document.getElementById("api");
render(<New />, container);