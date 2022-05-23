import React, {useEffect} from "react";
import "./App.css";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { gapi } from "gapi-script"
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

const App = () => {
  useEffect(() => {
 function start() {
   gapi.client.init({
     clientId: "444345447632-0okdi2kdi4n9tip711p3fpt0ib3a32ph.apps.googleusercontent.com",
     scope: ""
   })
 }
  gapi.load('client: auth2', start)
  
  });

 // var accessToken = gapi.auth.getToken().accessToken
  
  return (
    <Router>
      <Container maxWidth="lg">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={Auth} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
