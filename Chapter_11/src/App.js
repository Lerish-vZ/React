import { connect } from "react-redux";
import Cart from "./Cart";

function mapStateToProps(state) { //subscribes to store and makes slices of store data available as props
  return {
    totalCost: state.totalCost,
    productCart: state.productCart,
  };
}
function mapDispatchToProps(dispatch) { //gives component access to the action creator functions that can be called to dispatch an action to the store
  return {
    onAddProduct: (productName, productPrice) => //dispatches an action with type addProduct + payload productData
      dispatch({
        type: "addProduct",
        productData: {
          productName: productName,
          productPrice: productPrice,
        },
      }),
    onDeleteProduct: (productData) =>
      dispatch({
        type: "deleteProduct",
        productData: productData,
      }),
  };
}
var connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Cart); //connect mapStateToProps and mapDispatchToProps to our Cart component so has access to totalCost, onAddProduct and onDeleteProduct
export default connectedComponent;
