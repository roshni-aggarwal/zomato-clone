import express from "express";

import { UserModel } from "../../database/allModels";
import {
  ValidateSignIn,
  ValidateSignUp,
} from "../../validation/auth.validation";

const Router = express.Router();

/**
 * Route     /signup
 * Desc      Create new account
 * Params    none
 * Accesss   Public
 * Method    POST
 */
Router.post("/signup", async (req, res) => {
  try {
    await ValidateSignUp(req.body.credentials);
    await UserModel.findByEmailAndPhone(req.body.credentials);

    const newUser = await UserModel.create(req.body.credentials);
    const token = newUser.generateJwtTokens();
    return res.status(200).json({ token, status: "success" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Route     /signin
 * Desc      Login into existing account
 * Params    none
 * Accesss   Public
 * Method    POST
 */
Router.post("/signin", async (req, res) => {
  try {
    await ValidateSignIn(req.body.credentials);
    const user = await UserModel.findByEmailAndPassword(req.body.credentials);
    const token = user.generateJwtTokens();
    return res.status(200).json({ token, status: "success" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
