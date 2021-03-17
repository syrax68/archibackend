import React from 'react';
import './App.css';
import Header from './components/header/header';
import Home from './components/home/home';
import Auth from './components/auth/login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Auth}/>
            <Route exact path="/inscription" component={Home}/>
        </Switch>
      </Router> 
    </div>
  );
}

export default App;
