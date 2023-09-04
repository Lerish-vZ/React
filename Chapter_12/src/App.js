import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

// class App extends React.Component {
//   state = { requested: "" };
//   render() {
//     return (
//       <div>
//         <Button
//           variant="link"
//           onClick={() =>
//             this.setState({
//               requested: "https://jsonplaceholder.typicode.com/posts",
//             })
//           }
//         >
//           Posts
//         </Button>
//         <Button
//           variant="link"
//           onClick={() =>
//             this.setState({
//               requested: "https://jsonplaceholder.typicode.com/todos",
//             })
//           }
//         >
//           Todos
//         </Button>
//         <br />
//         Requested: {this.state.requested}
//       </div>
//     );
//   }
// }

const App = () => {
  const postsUrl = "https://jsonplaceholder.typicode.com/posts";
  const todosUrl = "https://jsonplaceholder.typicode.com/todos";
  const [requested, setRequested] = useState(postsUrl); //set initial value of requested to postsUrl

  return (
    <div>
      <Button variant="link" onClick={() => setRequested(postsUrl)}>
        Posts
      </Button>
      <Button variant="link" onClick={() => setRequested(todosUrl)}>
        Todos
      </Button>
      <br />
      Requested: {requested}
    </div>
  );
};

export default App;
