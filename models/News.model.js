const mongoose = require("mongoose");

const NewsSchema = mongoose.Schema({
  img: String,
  name: String,
  description: String,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  },
  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      text: String,
    },
  ],
});

const News = mongoose.model("News", NewsSchema);

module.exports = News;
