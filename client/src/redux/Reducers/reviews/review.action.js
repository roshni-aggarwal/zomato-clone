import axios from "axios";

// redux types
import { GET_REVIEW, POST_REVIEW } from "./reviews.type";

export const getReview = (resID) => async (dispatch) => {
  try {
    const getReviews = await axios({
      method: "GET",
      url: `http://localhost:4000/review/${resID}`,
    });

    return dispatch({ type: GET_REVIEW, payload: getReviews.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

export const postReview = (reviewData) => async (dispatch) => {
  try {
    await axios({
      method: "POST",
      url: `http://localhost:4000/review/new`,
      data: { reviewData },
    });

    return dispatch({ type: POST_REVIEW, payload: reviewData });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};
