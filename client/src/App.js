import React from "react";
import "./App.css";

import Header from "./components/header";
import Mytodo from "./components/todo";
import Mytodos from "./components/addTodos";
import { Provider } from "./context";

function App() {
  return (
    <Provider>
      <div className="app-container">
        <Header />
        <Mytodo />
        <Mytodos />
        <hllo />
      </div>
    </Provider>
  );
}

export default App;
