import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coins: [1, 1, 0],
  rotation: false,
};

const yiChingSlice = createSlice({
  name: "Yi-Ching",
  initialState,
  reducers: {
    setCoins(state, action) {
      state.coins = action.payload;
    },
    startRotation(state) {
      state.rotation = true;
    },
    stopRotation(state) {
      state.rotation = false;
    },
  },
});

const tossCoins = () => {
  const coins = [];
  for (let i = 0; i < 3; i++) {
    coins.push(Math.round(Math.random()));
  }
  return coins;
};

export const startPrediction = () => {
  return async (dispatch) => {
    const rotation = setTimeout(() => {
      const tossedCoins = tossCoins();
      dispatch(yiChingActions.setCoins(tossedCoins));
      dispatch(yiChingActions.stopRotation());
    }, 2000);
  };
};

export const yiChingActions = yiChingSlice.actions;

export default yiChingSlice.reducer;
