import React from "react";
import ReactDOM from "react-dom";
import Form from "./Form";
import Items from "./ItemsList";
import "./App.css";

function App() {
  return (
    <>
      <div className="wrap">
        <div className="container">
          <Form />
        </div>
      </div>
      <div className="wrap invert">
        <div className="container">
          <Items />
        </div>
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
