import joi from "joi";

export const validateOrderDetails = (orderData) => {
  const schema = joi.object({
    food: joi.array().items(
      joi.object({
        details: joi.ref("foods"),
        quantity: joi.number().required(),
      })
    ),
    paymode: joi.string().required(),
    status: joi.string(),
    paymentDetails: joi.object({
      itemTotal: joi.number().required(),
      promo: joi.string().required(),
      tax: joi.string().required(),
      razorpay_payment_id: joi.string().required(),
    }),
  });

  return schema.validateAsync(orderData);
};
