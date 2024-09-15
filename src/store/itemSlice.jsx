import  { createSlice} from '@reduxjs/toolkit'
const itemSlice=createSlice({
  name:'items',
  initialState:[],
  reducers:{
    addIntialItems: (state,action)=>{
      console.log("reducer",state,action)
      return action.payload;
    },
  }
});

export default itemSlice
export const itemActions=itemSlice.actions

