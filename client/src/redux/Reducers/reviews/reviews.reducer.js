import { GET_REVIEW, POST_REVIEW } from "./reviews.type";

const initialState = {
  reviews: [],
};

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REVIEW:
      return {
        ...state,
        ...action.payload,
      };
    case POST_REVIEW:
      return {
        ...state,
        reviews: [action.payload, ...state.reviews],
      };
    default:
      return {
        ...state,
      };
  }
};

export default reviewReducer;
