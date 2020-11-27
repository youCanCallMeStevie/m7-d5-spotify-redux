import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";

import SideNavBar from './components/SideNavBar';
import BottomPlayer from "./components/BottomPlayer";
import Home from './components/Home';
import ArtistPage from "./components/ArtistPage"
import Login from "./components/Login"


function App() {
  return (
    <Router className="App">
      <Route path={["/artist", "/artist/:id", "/home"]}  component={SideNavBar} />
      <Route path={["/artist", "/artist/:id", "/home"]}  component={BottomPlayer} />
      <Route
        path="/home"
        exact render={props => <Home {...props} />}
      />
    <Route
        path={["/artist", "/artist/:id"]}
       render={props => <ArtistPage {...props} />}
      />
      <Route
        path="/login"
        exact render={props => <Login {...props} />}
      />
    </Router>
  );
}

export default App;
