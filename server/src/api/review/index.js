import express from "express";
import passport from "passport";

import { ReviewModel } from "../../database/allModels";
import { validRequiredString } from "../../validation/common.validation";
import { validateReview } from "../../validation/review.validation";

const Router = express.Router();

/**
 * Route     /:resID
 * Desc      Get all review for a particular restaurant
 * Params    resID
 * Accesss   Public
 * Method    GET
 */
Router.get("/:resID", async (req, res) => {
  try {
    const { resID } = req.params;
    // await validRequiredString(req.params);

    const reviews = await ReviewModel.find({ restaurant: resID }).sort({
      createdAt: -1,
    });

    return res.status(200).json({ reviews });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Route     /new
 * Desc      Add new food/restaurant review and rating
 * Params    none
 * Accesss   Private
 * Method    POST
 */
Router.post(
  "/new",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { _id } = req.user;
      const { reviewData } = req.body;

      // await validateReview(req.body);

      const review = await ReviewModel.create({ ...reviewData, user: _id });

      return res.status(200).json({ review });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
);

/**
 * Route     /delete/:id
 * Desc      Delete a specific review
 * Params    id
 * Accesss   Private
 * Method    DELETE
 */
Router.delete(
  "/delete/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { id } = req.params;
      // await validRequiredString(req.params);
      const { user } = req;

      const data = await ReviewModel.findOneAndDelete({
        user: user._id,
        _id: id,
      });

      if (!data) return res.json({ message: "Review was not deleted" });

      return res
        .status(200)
        .json({ message: "Successfully deleted the review.", data });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
);

export default Router;
