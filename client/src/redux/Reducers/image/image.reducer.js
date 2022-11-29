import { GET_IMAGE } from "./image.type";

const initalState = {
  images: [],
};

const imageReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_IMAGE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default imageReducer;
