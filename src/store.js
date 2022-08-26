import { configureStore } from "@reduxjs/toolkit";

let Initial_State = {
  products : [],
  cart : {},
  quantity : 1
};

let store = configureStore({
  reducer: (state, action) => {
    const { type, payload } = action;
    

    switch (type) {

      case "fetch_data":
        return {
          ...state,
          products: payload.products,
        };

      case "Adding_Products":
        return {
          ...state,
          products: [...state.products, payload.NewProducts],
        };

        case "Add _in_Cart":
          const {productId , quantity} = payload
        return {
          ...state,
          cart:{...state.cart , [productId] : quantity } 
        };

        // case "update_Qty":
        // let { productQty } = payload
        // console.log(productQty += 1)
        // return {
        //   ...state,
        //   quantity : productQty += 1 
          
        // };

    }
    return Initial_State;
  },
});

export default store;
