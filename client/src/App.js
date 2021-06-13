import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Provider } from 'react-redux';
import MainPage from './components/MainPage';
import RouterWorkers from './components/router';

function App() {
  return (
    <div className="App">
      <Router>
        <RouterWorkers></RouterWorkers>
      </Router>
    </div>
  );
}



export default App;
