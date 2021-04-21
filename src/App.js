import React from "react";
import { Route, Router, Switch, Redirect } from "react-router";
import "./App.css";
import MovieDetails from "./components/MovieDetails";
import MovieList from "./components/MovieList";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/movies" component={MovieList} />
        <Route path="/movies/:id" component={MovieDetails} />
        <Redirect to="/movies" />
      </Switch>
    </div>
  );
}

export default App;
