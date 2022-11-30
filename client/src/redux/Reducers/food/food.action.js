import axios from "axios";

// redux types
import { GET_FOOD_LIST, GET_FOOD } from "./food.type";

export const getFood = (foodId) => async (dispatch) => {
  try {
    const food = await axios({
      method: "GET",
      url: `http://localhost:4000/food/${foodId}`,
    });

    return dispatch({ type: GET_FOOD, payload: food.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

export const getFoodList = (menuId) => async (dispatch) => {
  try {
    const menu = await axios({
      method: "GET",
      url: `http://localhost:4000/menu/list/${menuIdId}`,
    });

    return dispatch({ type: GET_FOOD_LIST, payload: menu.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};
