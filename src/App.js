import React from "react";
import "./App.css";
import { Link } from 'react-router-dom';

function App(props) {
  return (
    <div className="App">
      <h1>SPA with Router</h1>
      <hr />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/htmldefinition">HTML Definition</Link></li>
        <li><Link to="/cssdefinition">CSS Definition</Link></li>
        <li><Link to="/jsdefinition">JS Definition</Link></li>
      </ul>
      <hr />
      <div className="App">
        { props.children }
      </div>
    </div>
  );
}

export default App;
