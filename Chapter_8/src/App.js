import "./App.css";
//import JumboTronComponent from "./JumboTronComponent";
//import UserForm from "./UserForm";
//import Products from './Products';
import React, { Component } from "react";
import GitHub from "./GitHub";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Nav, Navbar } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div>
        <Header /> 
        {/* render a header component */}
      </div>
    );
  }
}

export default App;

class Header extends Component {
  render() {
    return (
      // <BrowserRouter> 
      // {/* contains Routes that tell router where to go once window's location changes */}
      //   <div>
      //     <Switch>
      //       {/* Wrap routes in Switch as additional measure to not show more than one component simultaneously */}
      //       <Route path="/github" component={GitHub} />
      //       <Route exact path="/" component={Home} />
      //       <Route path="/*" component={NotFound} />
      //     </Switch>
      //     {/* Each route has at least two properties: path, and a unique name we assign to our route + a component that specifies the associated component */}
      //   </div>
      // </BrowserRouter>


    );
  } //BrowserRoute, Switch and Route is imported from 'react-router-dom'
}
class Home extends Component {
  render() {
    return <div>Home</div>;
  }
}
class NotFound extends Component {
  render() {
    return <div>Not Found</div>;
  }
}
