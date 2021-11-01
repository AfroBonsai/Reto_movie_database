module.exports = mongoose => {
  const Movie = mongoose.model(
    "movies",
    mongoose.Schema(
      {
        title: {
          type: String,
          required: true
        },
        genre: {
          type: String,
          required: true
        },
        cast: {
          type: String,
          required: true
        },
        location: {
          type: String,
          required: true
        },
        available: {
          type: Boolean,
          required: true
        },
      },
      { timestamps: true }
    )
  );

  return Movie;
};