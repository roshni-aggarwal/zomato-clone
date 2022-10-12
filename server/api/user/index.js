import express from "express";
import passport from "passport";
import { UserModel } from "../../database/user";

const Router = express.Router();

/**
 * Route     /
 * Desc      Get authorized user details
 * Params    none
 * Accesss   Private
 * Method    GET
 */
Router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    try {
      const { fullName, email, phoneNumber, address } = req.user;

      return res
        .status(200)
        .json({ user: { fullName, email, phoneNumber, address } });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
);

/**
 * Route     /:_id
 * Desc      Get user data (for the review system)
 * Params    none
 * Accesss   Public
 * Method    GET
 */
Router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const getUser = await UserModel.findById(_id);

    if (!getUser) return res.status(404).json({ error: "No user found" });

    const { fullName } = getUser;

    return res.status(200).json({ user: fullName });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Route     /update/:_id
 * Desc      Update user details
 * Params    none
 * Accesss   Private
 * Method    PUT
 */
Router.put(
  "/update/:_id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { _id } = req.params;
      const { userData } = req.body;

      userData.password = undefined;

      const updatedUser = await UserModel.findByIdAndUpdate(
        _id,
        {
          $set: userData,
        },
        {
          new: true,
        }
      );

      return res.status(200).json({ updatedUser });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
);

export default Router;
