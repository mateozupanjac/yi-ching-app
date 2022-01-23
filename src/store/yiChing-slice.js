import { createSlice } from "@reduxjs/toolkit";

import { hexagrams } from "../API/hexagrams";
import { trigrams } from "../API/trigrams";

const hexagram_API = Object.values(hexagrams);
const trigrams_API = trigrams;

const initialState = {
  coins: [1, 1, 0],
  lines: [],
  isComplete: false,
  rotation: false,
};

const yiChingSlice = createSlice({
  name: "Yi-Ching",
  initialState,
  reducers: {
    setCoins(state, action) {
      state.coins = action.payload;
    },
    setLines(state, action) {
      console.log(action.payload);

      if (state.lines.length < 6) {
        if (state.lines.length === 5) state.isComplete = true;
        state.lines.push(action.payload);
      }
    },
    startRotation(state) {
      state.rotation = true;
    },
    stopRotation(state) {
      state.rotation = false;
    },
  },
});

const { setCoins, startRotation, stopRotation, setLines } =
  yiChingSlice.actions;

// *** PREDICTION FUNCTIONS ***

const tossCoins = () => {
  const coins = [];
  for (let i = 0; i < 3; i++) {
    coins.push(Math.round(Math.random()).toString());
  }
  return coins;
};

const convertCoinsToLine = (x) => {
  let y = x.join("");
  let line = "";
  console.log(y);
  // switch (y) {
  //   case y === "110" || y === "011" || y === "101":
  //     line = "full";
  //     break;
  //   case y === "100" || y === "010" || y === "001":
  //     line = "dashed";
  //     break;
  //   case y === "000":
  //     line = "fullWillChange";
  //     break;
  //   case y === "111":
  //     line = "dashedWillChange";
  //     break;
  //   default:
  //     throw new Error();
  // }

  if (y === "110" || y === "011" || y === "101") {
    line = "full";
  } else if (y === "100" || y === "010" || y === "001") {
    line = "dashed";
  } else if (y === "000") {
    line = "fullWillChange";
  } else if (y === "111") {
    line = "dashedWillChange";
  }

  return line;
  // if (x === '110' || x === '011' || x === '101') {
  //     return
  // } else if (x === '100' || x === '010' || x === '001') {
  //     arr.push('isprekidana');
  // } else if (x === '000') {
  //     arr.push('punaPromjenjiva');
  // } else if (x === '111') {
  //     arr.push('isprekidanaPromjenjiva');
  // }
};

// *** START PREDICTION THUNK ***
export const startPrediction = () => {
  return async (dispatch) => {
    dispatch(startRotation());

    setTimeout(() => {
      const tossedCoins = tossCoins();
      const line = convertCoinsToLine(tossedCoins);
      dispatch(setCoins(tossedCoins));
      dispatch(setLines(line));
      dispatch(stopRotation());
    }, 2000);
  };
};

export const yiChingActions = yiChingSlice.actions;

export default yiChingSlice.reducer;
