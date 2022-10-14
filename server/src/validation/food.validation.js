import joi from "joi";

export const validateFoodDetails = (foodData) => {
  const schema = joi.object({
    name: joi.string().required(),
    descript: joi.string().required().max(20),
    isVeg: joi.bool().required(),
    isContainsEggs: joi.bool().required(),
    category: joi.string().required(),
    photos: joi.ref("images"),
    price: joi.number().required(),
    addons: joi.array().ref("foods"),
    restaurant: joi.required().ref("restaurant"),
  });

  return schema.validateAsync(foodData);
};
