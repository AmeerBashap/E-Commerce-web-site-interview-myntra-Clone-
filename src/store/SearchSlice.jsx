import React from 'react'
import { createSlice } from '@reduxjs/toolkit'


const SearchSlice = createSlice({
  name:"Search",
  initialState:{ query:''},
  reducers:{
    setQuery(state,action){
      state.query=action.payload;
    },
    clearQuery(state,action){
      state.query=''
    },
  }
})

export const searchActions=SearchSlice.actions;
export default SearchSlice.reducer // here it means that it is carring the state of the slice