import express from "express";

import { RestaurantModel } from "../../database/allModels";
import { validRequiredString } from "../../validation/common.validation";
import { validateRestaurantDetails } from "../../validation/restaurant.validation";

const Router = express.Router();

/**
 * Route     /
 * Desc      Add new restaurant
 * Params    none
 * Accesss   Public
 * Method    POST
 */
Router.get("/", async (req, res) => {
  try {
    const { data } = req.body;

    await validateRestaurantDetails(req.body);

    const restaurant = await RestaurantModel.create(data);
    return res.status(200).json({
      message: "Restaurant added successfully !!!",
      restaurant: restaurant,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Route     /
 * Desc      Get all restaurant details based on city
 * Params    none
 * Accesss   Public
 * Method    GET
 */
Router.get("/", async (req, res) => {
  try {
    //http:localhost:4000/?city=surat
    const { city } = req.query;

    await validRequiredString(req.query);

    const restaurants = await RestaurantModel.find({ city });

    if (restaurants.length === 0)
      return res.json({ error: "No restaurant found in this city" });

    return res.status(200).json({ restaurants });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Route     /:_id
 * Desc      Get restaurant details based on id
 * Params    _id
 * Accesss   Public
 * Method    GET
 */
Router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    await validRequiredString(req.params);
    const restaurant = await RestaurantModel.findById(_id);
    if (!restaurant)
      return res.status(400).json({ error: "No restaurant found" });
    return res.status(200).json({ restaurant });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Route     /search/:searchString
 * Desc      Get restaurants based on serach string
 * Params    searchString
 * Accesss   Public
 * Method    GET
 */
Router.get("/serach/:searchString", async (req, res) => {
  try {
    const { searchString } = req.params;
    await validRequiredString(req.params);
    const restaurants = await RestaurantModel.find({
      name: { $regex: searchString, $options: "i" },
    });
    if (restaurants.length === 0)
      return res.status(400).json({ error: "No restaurant found" });
    return res.status(200).json({ restaurants });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
