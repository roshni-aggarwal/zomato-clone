import express from "express";

const Router = express.Router();

/**
 * Route     /
 * Desc      Get authorized user details
 * Params    none
 * Accesss   Public
 * Method    GET
 */
Router.get("/", (req, res) => {
  try {
    const { fullName, email, phoneNumber, address } = req.user;

    return res
      .status(200)
      .json({ user: { fullName, email, phoneNumber, address } });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
