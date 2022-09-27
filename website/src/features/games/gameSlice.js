import {createSlice } from '@reduxjs/toolkit';

const gameSlice = createSlice({
  name:"game",
  initialState: {
  time: "short",
  category: "none",
  players: "1",
  mechanics: "none"
},
reducers: {
  chooseTime: (state, action) => {state.time = action.payload},
  chooseCategory: (state, action) => {state.category = action.payload},
  choosePlayers: (state, action) => {state.players = action.payload},
  chooseMechanics: (state, action) => {state.mechanics = action.payload}  
}
})

export default gameSlice.reducer;

export const {chooseTime, chooseMechanics, chooseCategory, choosePlayers } = gameSlice.actions;