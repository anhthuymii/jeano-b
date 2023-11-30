import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        size: { type: String, required: true },
        quantity: { type: String, required: true },
        price: { type: Number, required: true },
        photo: { data: Buffer, contentType: String },
        name: { type: String, required: true },
      },
    ],
    paymentIntent: {},
    orderStatus: {
      type: String,
      required: true,
    },
    cancelReason: { type: String },
    // userCancel: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    sendDate: { type: Date },
    receivedDate: { type: Date },
    orderby: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    phone: { type: Number, required: true },
    name: { type: String, required: true },
    address: {
      city: {
        type: String,
      },
      district: {
        type: String,
      },
      commune: {
        type: String,
      },
      detail: {
        type: String,
        // required: true,
      },
    },

    // paymentId: { type: String },
    totalPrice: { type: Number, required: true },
    itemsPrice: { type: Number, required: true },
    shippingPrice: { type: Number, required: true },
    notifications: [
      {
        type: { type: String, required: true },
        message: { type: String, required: true },
        data: { type: Object },
      },
    ],
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);

export default mongoose.model("Order", orderSchema);
