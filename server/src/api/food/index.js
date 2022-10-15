import express from "express";

import { FoodModel } from "../../database/food";
import { validateCategory, validateId } from "../../validation/common.validation";
import { validateFoodDetails } from "../../validation/food.validation";

const Router = express.Router();

/**
 * Route     /
 * Desc      Create new food item
 * Params    none
 * Accesss   Public
 * Method    POST
 */
Router.post("/", async (req, res) => {
  try {
    const { data } = req.body;
    // await validateFoodDetails(req.body);
    const food = await FoodModel.create(data);
    res.status(200).json({
      message: "New food item is added !!!",
      newItem: food,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Route     /:_id
 * Desc      Get food based on id
 * Params    id
 * Accesss   Public
 * Method    GET
 */
Router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    await validateId(req.params);
    const food = await FoodModel.findById(_id);
    res.status(200).json({ food });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Route     /restaurant/:_id
 * Desc      Get all food based on particular restaurant
 * Params    id
 * Accesss   Public
 * Method    GET
 */
Router.get("/restaurant/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    await validateId(req.params);
    const foods = await FoodModel.find({
      restaurant: _id,
    });

    if (foods.length == 0)
      return res
        .status(404)
        .json({ message: "No food found for this particular restaurant." });

    res.status(200).json({ foods });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Route     /category/:category
 * Desc      Get all food based on particular category
 * Params    category
 * Accesss   Public
 * Method    GET
 */
Router.get("/category/:category", async (req, res) => {
  try {
    const { category } = req.params;
    await validateCategory(req.params);
    const foods = await FoodModel.find({
      category: { $regex: category, $options: "i" },
    });

    if (!foods)
      return res
        .status(404)
        .json({ error: `No food matched with ${category}` });

    res.status(200).json({ foods });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
