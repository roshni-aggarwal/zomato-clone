import joi from "joi";

export const validateFoodDetails = (foodData) => {
  const schema = joi.object({
    name: joi.string().required(),
    description: joi.string().required().max(20),
    isVeg: joi.bool().required(),
    isContainsEgg: joi.bool().required(),
    category: joi.string().required(),
    price: joi.number().required(),
  });

  return schema.validateAsync(foodData);
};
