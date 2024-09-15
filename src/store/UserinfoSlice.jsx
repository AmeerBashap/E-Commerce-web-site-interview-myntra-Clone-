import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const initialState={
  username:"user",
}

const UserinfoSlice =createSlice({
  name:"userinfo",
  initialState,
  reducers:{
    userLogin:(state,action)=>{
      console.log("state=>",state,action)
      state.username=action.payload
    },
    userLogout:(state,action)=>{
      console.log(state,action)
      state.username=action.payload
    }
  }
})
export  const UserinfoActions=UserinfoSlice.actions
export default UserinfoSlice.reducer
