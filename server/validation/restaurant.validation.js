import joi from "joi";

export const validateRestaurantDetails = (data) => {
  const schema = joi.object({
    name: joi.string().required(),
    city: joi.string().required(),
    address: joi.string().required(),
    mapLocation: joi.string().required(),
    cuisine: joi.array().items(joi.string()),
    restaurantTimimgs: joi.string(),
    contactNumber: joi.number(),
    website: joi.string(),
    popularDishes: joi.array().items(joi.string()),
    averageCost: joi.number(),
    amenities: joi.array().items(joi.string()),
    menuImages: {
      type: mongoose.Types.ObjectId,
      ref: "images",
    },
    menu: {
      type: mongoose.Types.ObjectId,
      ref: "menus",
    },
    reviews: [
      {
        type: mongoose.Types.ObjectId,
        ref: "reviews",
      },
    ],
    photos: {
      type: mongoose.Types.ObjectId,
      ref: "images",
    },
  });

  return schema.validateAsync(data);
};
