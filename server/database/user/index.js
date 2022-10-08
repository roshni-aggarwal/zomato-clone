import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String },
    address: [
      {
        detail: { type: String },
        for: { type: String },
      },
    ],
    phoneNumber: [Number],
  },
  {
    timestamps: true,
  }
);

//attachments
UserSchema.methods.generateJwtTokens = function () {};

//helper function
UserSchema.statics.findByEmailAndPhone = async () => {};

UserSchema.statics.findByEmailAndPassword = async () => {};

export const UserModel = mongoose.Model("users", UserSchema);
