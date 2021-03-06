import React, { Component } from "react";

const Context = React.createContext();
const reducer = (prevState, action) => {
  switch (action.type) {
    case "TOGGLE":
      return {
        todo: prevState.todo.map((t) => {
          if (t.id === action.payload) {
            t.complete = !t.complete;
          }
          return t
        }),
      };
      default:
        return prevState
  }
};

export class Provider extends Component {
  state = {
    todo: [
      { id: 1, title: "This is the first todo ", complete: false },
      { id: 2, title: "This is the second todo", complete: false },
      { id: 3, title: "This is the third todo", complete: false },
    ],
    dispatch: (action) =>
      this.setState((prevState) => reducer(prevState, action)),
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
