import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    todo: [
      { id: 1, title: "Hellpow world", complte: false },
      { id: 2, title: "this is the todo", complte: false },
      { id: 3, title: "App making process", complte: false },
    ],
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
