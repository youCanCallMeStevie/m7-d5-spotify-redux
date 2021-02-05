import { SELECTED_SONGS } from "./constants";

const playerReducer = (state = { track: {}, volume: "50" }, action) => {
  const { type, payload } = action;
  switch (type) {
    case SELECTED_SONGS:
      return { ...state, track: payload };
    default:
      return state;
  }
};

export default playerReducer;
