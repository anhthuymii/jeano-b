import mongoose from "mongoose";

// const orderDetailSchema = mongoose.Schema;

const orderSchema = mongoose.Schema(
  {
    // products: [
    //   {
    //     product: {
    //       type: mongoose.Schema.Types.ObjectId,
    //       ref: "Product",
    //     },
    //     price: { type: Number },
    //     quantity: { type: Number },
    //     size: { type: String },
    //   },
    // ],
    products: { type: Types.ObjectId, ref: "product" },
    user: { type: Types.ObjectId, ref: "user" },
    price: { type: Number },
    quantity: { type: Number },
    size: { type: String },
    totalPrice: { type: Number },
    address: {
      type: Sting,
      required: true,
    },
    paymentIntent: {},
    orderStatus: {
      type: String,
      default: "Not Processed",
      enum: [
        "Not Processed",
        "Cash on Delivery",
        "Processing",
        "Dispatched",
        "Cancelled",
        "Delivered",
      ],
    },
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    // },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);
