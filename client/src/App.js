import React, {useEffect} from "react";
import "./App.css";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import PostDetails from "./components/PostDetails/PostDetails";
import { gapi } from "gapi-script"
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import CreatorOrTag from './components/CreatorOrTag/CreatorOrTag';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

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
      <Container maxWidth="xl">
        <Navbar />
        <Switch>
          <Route path="/" exact component={() => <Redirect to={"/posts"} />} />
          <Route path="/posts" exact component={Home} />
          <Route path="/posts/search" exact component={Home} />
          <Route path="/posts/:id" component={PostDetails} />
          <Route path={['/creators/:name', '/tags/:name']} component={CreatorOrTag} />
          <Route path="/auth" exact component={() => (!user ? <Auth />: <Redirect to="/posts" />)} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
