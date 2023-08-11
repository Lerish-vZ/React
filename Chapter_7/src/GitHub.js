import React, { Component } from "react";
import axios from "axios"; // npm install axios
class GitHub extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
    };
    this.getGitHubData("greg"); //returns promise which we need to subscribe to
  }
  getGitHubData(_searchTerm) {
    axios
      .get("https://api.github.com/search/users?q=" + _searchTerm) //use get of axios and give the url of API endpoint
      .then((res) => {
        //subscribe to promise (when ajax call is completed the response is fed to the promise then pushed to the component)
        this.setState({
          isLoading: false, //not loading anymore got results form server
        });
        console.log(res.data.items);
      });
  }
  render() {
    return <div>{this.state.isLoading && <h4>Getting data...</h4>}</div>; //add load icon
  }
}
export default GitHub;
