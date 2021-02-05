import { LIKED_SONG, REJECTED_SONG } from "./constants";

const userReducer = (state = { liked: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIKED_SONG:
      return { ...state, liked: state.liked.concat(payload) };
    case REJECTED_SONG:
      return { ...state, liked: state.liked.filter(liked => liked !== payload) };
    default:
      return state;
  }
};

export default userReducer;
