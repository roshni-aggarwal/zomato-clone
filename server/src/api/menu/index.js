import express from "express";

import { MenuModel, ImageModel } from "../../database/allModels";
import { validRequiredString } from "../../validation/common.validation";

const Router = express.Router();

/**
 * Route     /list/:_id
 * Desc      Get all menus based on menu id
 * Params    _id
 * Accesss   Public
 * Method    GET
 */
Router.get("/list/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    await validRequiredString(req.params);
    const menus = await MenuModel.findById(_id);

    if (!menus)
      return res
        .status(404)
        .json({ error: "No menu present for this restaurant." });

    return res.json(200).json({ menus });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Route     /images/:_id
 * Desc      Get menu images based on restaurant id
 * Params    _id
 * Accesss   Public
 * Method    GET
 */
Router.get("/images/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    await validRequiredString(req.params);

    const menuImages = await ImageModel.findById(_id);

    if (!menuImages)
      return res.status(404).json({ error: "No menu images found." });

    return res.json(200).json({ menuImages });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
