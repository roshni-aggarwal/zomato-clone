import express from "express";
import passport from "passport";

import { OrderModel } from "../../database/allModels";

const Router = express.Router();

/**
 * Route     /
 * Desc      Get all orders by user id
 * Params    _id
 * Accesss   Public
 * Method    GET
 */
Router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { user } = req;

      const getOrders = await OrderModel.findOne({ user: user._id });

      if (!getOrders)
        return res.status(404).json({ error: "No order found for this user" });

      return res.status(200).json({ order: getOrders });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
);

export default Router;
