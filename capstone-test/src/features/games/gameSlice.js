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
  chooseBase: (state, action) => {state.base = action.payload},
  chooseCrust: (state, action) => {state.crust = action.payload},
  chooseSauce: (state, action) => {state.sauce = action.payload},
  chooseCheese: (state, action) => {state.cheese = action.payload}  
}
})

export default gameSlice.reducer;

export const {chooseBase, chooseCheese, chooseCrust, chooseSauce } = gameSlice.actions;