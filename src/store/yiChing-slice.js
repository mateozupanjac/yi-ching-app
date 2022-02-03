import { createSlice } from "@reduxjs/toolkit";
import { batch } from "react-redux";
import { uiActions } from "./ui-slice";

import { hexagrams } from "../API/hexagrams";
import { trigrams } from "../API/trigrams";

const hexagram_API = Object.values(hexagrams);
const trigrams_API = trigrams;

const initialState = {
  coins: [1, 1, 0],
  lines: [],
  isComplete: false,
  rotation: false,
  buttonDisabled: false,
};

const yiChingSlice = createSlice({
  name: "Yi-Ching",
  initialState,
  reducers: {
    setCoins(state, action) {
      state.coins = action.payload;
    },
    setLines(state, action) {
      if (state.lines.length < 6) {
        if (state.lines.length === 5) {
          state.isComplete = true;
          state.buttonDisabled = true;
        }
        state.lines.push(action.payload);
      }
    },
    setIsCompleteToFalse(state) {
      state.isComplete = false;
    },
    startRotation(state) {
      state.rotation = true;
      state.buttonDisabled = true;
    },
    stopRotation(state) {
      state.rotation = false;
      state.buttonDisabled = false;
    },
  },
});

// *** PREDICTION FUNCTIONS ***
const { setCoins, startRotation, stopRotation, setLines } =
  yiChingSlice.actions;

const tossCoins = () => {
  const coins = [];
  for (let i = 0; i < 3; i++) {
    coins.push(Math.round(Math.random()).toString());
  }
  return coins;
};

const convertCoinsToLine = (x) => {
  let y = x.join("");
  //let line = "";

  if (y === "110" || y === "011" || y === "101") {
    return "full";
  } else if (y === "100" || y === "010" || y === "001") {
    return "dashed";
  } else if (y === "000") {
    return "fullWillChange";
  } else if (y === "111") {
    return "dashedWillChange";
  }
  // return line;
};

// *** START PREDICTION THUNK ***
export const startPrediction = () => {
  return async (dispatch) => {
    dispatch(startRotation());
    console.log(initialState.lines);
    setTimeout(() => {
      const tossedCoins = tossCoins();
      const line = convertCoinsToLine(tossedCoins);
      console.log(line);
      batch(() => {
        dispatch(stopRotation());
        dispatch(setCoins(tossedCoins));
        dispatch(setLines(line));
      });
    }, 2000);
  };
};

export const yiChingActions = yiChingSlice.actions;

export default yiChingSlice.reducer;
