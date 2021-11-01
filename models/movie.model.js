module.exports = mongoose => {
    const Movie = mongoose.model(
      "movies",
      mongoose.Schema(
        {
          title: String,
          genre: Number,
          cast: String,
          location: String,
          available: Boolean
        },
        { timestamps: true }
      )
    );
  
    return Movie;
  };