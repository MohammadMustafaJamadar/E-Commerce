import { configureStore } from "@reduxjs/toolkit";

let Initial_State = {
  products : [],
  cart : [],
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
        return {
          ...state,
          cart : [...state.cart , payload.element] 
        };

        case "updateProduct":
        
        return {
          ...state,
          cart : payload.updateArr
        };

        case "remove_item":
        
        return {
          ...state,
          cart : payload.removeItem
        };

    }
    return Initial_State;
  },
});

export default store;
