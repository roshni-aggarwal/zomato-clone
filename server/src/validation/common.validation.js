import joi from "joi";

// export const validRequiredString = (string) => {
//   const schema = joi.object({
//     string: joi.string().required(),
//   });

//   return schema.validateAsync(string);
// };

export const validateId = (id) => {
  const Schema = joi.object({
    _id: joi.string().required(),
  });

  return Schema.validateAsync(id);
};

export const validateCategory = (category) => {
  const Schema = joi.object({
    category: joi.string().required(),
  });

  return Schema.validateAsync(category);
};
