// Reducer
// Reducer
function cartReducer(state, action) { 
  if (state === undefined) { //initialize state
    return {
      totalCost: 0,
      productCart: [],
    };
  }
  switch (action.type) { //use switch to handle two action types (addProduct & deleteProduct)
    case "addProduct":
      return {
        ...state,
        totalCost: state.totalCost + parseInt(action.productData.productPrice), //parseInt is used to convert string to numeric in order to add & subtract
        productCart: state.productCart.concat({
          productName: action.productData.productName,
          productPrice: action.productData.productPrice,
        }),
      };
    case "deleteProduct":
      const updatedArray = state.productCart.filter(
        (product) => product.productName !== action.productData.productName
      );
      return {
        ...state,
        totalCost: state.totalCost - parseInt(action.productData.productPrice),
        productCart: updatedArray,
      };
    default:
      return state;
  }
}
export default cartReducer;
