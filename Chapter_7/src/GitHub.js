import React, { Component } from "react";
import axios from "axios"; // npm install axios
import ReactLoading from "react-loading";
import { Media, Form, FormGroup, FormControl, Button } from 'reactbootstrap';
class GitHub extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
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
          data: res.data.items,
        });
        console.log(res.data.items);
      });
  }
  render() {
    const listUsers = this.state.data.map((user) => (
      <Media key={user.id}>
        <a href={user.html_url}>
          <img
            width={64}
            height={64}
            className="mr-3"
            src={user.avatar_url}
            alt="Generic placeholder"
          />
        </a>
        <Media.Body>
          <h5>Login: {user.login}</h5>
          <p>Id: {user.id}</p>
        </Media.Body>
      </Media>
    ));
    return (
      <div>
        <h3>GitHub Users Results</h3>
        {
          this.state.isLoading && (
            <ReactLoading type="spinningBubbles" color="#444" />
          )
          // <h4>Getting data...</h4>
        }
        {listUsers}
      </div>
    ); //add load icon
  }
}
export default GitHub;
