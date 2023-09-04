import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import useFetch from './useFetch';
import Users from './Users';

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
  const data = useFetch(requested);


  return (
    <div>
      <Users />
      <Button variant="link" onClick={() => setRequested(postsUrl)}>
        Posts
      </Button>
      <Button variant="link" onClick={() => setRequested(todosUrl)}>
        Todos
      </Button>
      <br />
      Requested: {requested}
      <ul>
        {data.map((el) => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
