var mongoose = require('mongoose');

var MovieSchema = mongoose.Schema(
   {
      title : String,
      actor : String,
      director : String,
      year : Number,
      poster : String,
      trailer : String
   }
);

var MovieModel = mongoose.model("movie", MovieSchema, "movie");

module.exports = MovieModel;