import {createSlice } from '@reduxjs/toolkit';

const gameSlice = createSlice({
  name:"game",
  initialState: {
  base: "small",
  crust: "thin",
  sauce: "none",
  cheese: "none"
},
reducers: {
  choosebase: (state, action) => {state.base = action.payload},
  choosecrust: (state, action) => {state.crust = action.payload},
  choosesauce: (state, action) => {state.sauce = action.payload},
  choosecheese: (state, action) => {state.cheese = action.payload}  
}
})

export default gameSlice.reducer;

export const {choosebase, choosecheese, choosecrust, choosesauce } = gameSlice.actions;