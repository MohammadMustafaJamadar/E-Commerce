import { configureStore } from "@reduxjs/toolkit";

const Initial_State = {
  products: [],
  addingCart:[],
};

const store = configureStore({
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

        case "Adding_Cart":
        return {
          ...state,
          addingCart:[...state.addingCart , payload.element]
        };
    }
    return Initial_State;
  },
});

export default store;
