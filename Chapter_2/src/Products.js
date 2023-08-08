import React, { Component } from "react"; //imports the Component class form 'react' library which we use to extend
class Products extends Component {
  render() { //we specify JSX will be inserted into the DOM
    return (
      <div>
        <h2>Products Beginning React</h2>
      </div>
    );
  }
}
export default Products; //makes this component available for other files in app
