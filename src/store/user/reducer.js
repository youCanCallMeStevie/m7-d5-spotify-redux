import { LIKED_SONG } from "./constants";

const userReducer = (state = { liked: {} }, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIKED_SONG:
      return { ...state, liked: state.liked.concat(payload) };
    default:
      return state;
  }
};

export default userReducer;
