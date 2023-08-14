import React, { Component } from "react";
import axios from "axios"; // npm install axios
import ReactLoading from "react-loading";
import { Button } from 'react-bootstrap';
import { Media, Form, FormGroup, FormControl, Button } from "react-bootstrap";
class GitHub extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.props.history.push("/github");
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
        <Nav.Link href={`/github/user/${user.login}/${user.id}`}>
          <img
            width={64}
            height={64}
            className="mr-3"
            src={user.avatar_url}
            alt="Generic placeholder"
          />
        </Nav.Link>
        <Media.Body>
          <h1>User Login: {this.props.match.params.login}</h1>
          {/* this.props.match.params is an object that holds all the values passed through parameters */}
          <h2>User Id: {this.props.match.params.id}</h2>`
          <Button variant="primary" onClick={this.handleClick}>
            Go to GitHub Users
          </Button>
        </Media.Body>
      </Media>
    ));
    return (
      <div>
        <Form inline onSubmit={this.handleSubmit}>
          <Form.Group controlId="formInlineName">
            <Form.Control
              type="text"
              value={this.state.searchTerm}
              placeholder="Enter Search Term"
              onChange={this.handleChange}
            />
            Beginning React
          </Form.Group>{" "}
          <Button type="submit">Search</Button>
        </Form>
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
