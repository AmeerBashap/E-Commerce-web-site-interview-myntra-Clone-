import React from 'react'
import  { createSlice} from '@reduxjs/toolkit'
const BagSlice = createSlice({
  name:'bag',
  initialState:[],
  reducers:{
    addToBag: (state,action)=>{
      // console.log("reducer",state,action.payload);
      state.push(action.payload)
    },
    removeFromBag: (state,action)=>{
      // console.log("reducer",state,action)
    return  state.filter(itemId=>itemId!==action.payload)
    },
  }
});
export default BagSlice
export const BagActions=BagSlice.actions



