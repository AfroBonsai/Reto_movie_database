module.exports = mongoose => {
  const User = mongoose.model(
    "users",
    mongoose.Schema({
      name: {
        type: String,
        required: true
      },
      surnname: {
        type: String,
        required: true
      },
      dni: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      password: {
        type: String,
        required: true
      }/*,
      passwordCheck: {
        type: String,
        required: true
      }*/,
      city: {
        type: String,
        required: true
      },
      cp: {
        type: Number,
        required: true
      },
      address: {
        type: String,
        required: true
      },
      phone: {
        type: String,
        required: true
      },
      superUser: {
        type: Boolean,
        required: true
      },
    },

      { timestamps: true }
    )
  );

  return User;
};
