import joi from "joi";

export const validRequiredString = (string) => {
  const schema = joi.object({
    string: joi.string().required(),
  });

  return schema.validateAsync(string);
};
