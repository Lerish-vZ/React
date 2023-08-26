import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import cartReducer from "./reducer";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css';

var destination = document.querySelector('#container');

var store = createStore(cartReducer); //create the store with the cartReducer as argument. cartReducer was imported...

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, //We then pass in our store to the Provider component as a prop. The Provider component has to be the enveloping outermost component to ensure that every component has access to the Redux store.
    destination
);