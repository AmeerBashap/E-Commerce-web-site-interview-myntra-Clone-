import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import BagSlice from "./BagSlice";
import SearchSlice from "./SearchSlice";
import UserinfoSlice from "./UserinfoSlice";

const myntraStroe=configureStore({
  reducer:{
    items:itemSlice.reducer,
    fetchStatus:fetchStatusSlice.reducer,
    Bag:BagSlice.reducer,
    Search:SearchSlice,
    user:UserinfoSlice,
  }
})
console.log(itemSlice);

export default myntraStroe