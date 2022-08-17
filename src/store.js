import { configureStore } from "@reduxjs/toolkit";

const Initial_State = {
  count : 0 ,
  products : []
}

const store = configureStore({
  reducer : (state , action)=>{
    const { type , payload } = action;

    switch (type) {

      case "fetch_data":
        return {
          products: payload.products
          
        }

    }
    return Initial_State
  }
});

export default store;