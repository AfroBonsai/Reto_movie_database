module.exports = mongoose => {
  const Order = mongoose.model(
    "orders",
    mongoose.Schema(
      {
        movieID: String,
        clientId: String,
        orderDate: Date,
        returnDate: Date,
        price: Number,
      },
      { timestamps: true }
    )
  );

  return Order;
};