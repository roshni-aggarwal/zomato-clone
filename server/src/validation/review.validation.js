import joi from "joi";

export const validateReview = (review) => {
  const schema = joi.object({
    food: { type: mongoose.Types.ObjectId, ref: "foods" },
    restaurant: { type: mongoose.Types.ObjectId, ref: "restaurants" },
    user: { type: mongoose.Types.ObjectId, ref: "users" },
    ratings: joi.number().required(),
    reviewText: joi.string().required(),
    isRestaurantReview: joi.bool(),
    isFoodReview: joi.bool(),
    photos: {
      type: mongoose.Types.ObjectId,
      ref: "images",
    },
  });

  return schema.validateAsync(review);
};
