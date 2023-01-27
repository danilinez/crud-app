import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./Form";
import ItemsList from "./ItemsList";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/newItem" element={<Form />}></Route>
        <Route path="/" element={<ItemsList />}></Route>
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
