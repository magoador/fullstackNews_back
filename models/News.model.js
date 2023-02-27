const mongoose = require("mongoose");

const NewsSchema = mongoose.Schema({
  img: String,
  name: String,
  desciption: String,
  category: String,
  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
      text: String,
    },
  ],
});

const News = mongoose.model("News", NewsSchema);

module.exports = News;
