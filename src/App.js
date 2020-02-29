import React from "react";
import "./styles.css";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import { BrowserRouter, Switch, Route } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact={true}>
            <Users />
          </Route>
          <Route path="/userDetails">
            <UserDetails />
          </Route>
          <Route path="/user">
            <Users />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
