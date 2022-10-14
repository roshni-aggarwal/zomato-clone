import express from "express";
import passport from "passport";

import { OrderModel } from "../../database/allModels";
import { validateOrderDetails } from "../../validation/order.validation";

const Router = express.Router();

/**
 * Route     /
 * Desc      Get all orders by user id
 * Params    none
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

/**
 * Route     /new
 * Desc      Add new order
 * Params    none
 * Accesss   Private
 * Method    PUT
 */
Router.put(
  "/new/:_id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { user } = req;
      const { orderDetails } = req.body;

      await validateOrderDetails(req.body);

      const addNewOrder = await OrderModel.findOneAndUpdate(
        { user: user._id },
        {
          $push: {
            orderDetails: orderDetails,
          },
        },
        {
          new: true,
        }
      );

      return res.status(200).json({ order: addNewOrder });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
);

export default Router;
