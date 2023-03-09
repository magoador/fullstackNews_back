const News = require("../models/News.model");

module.exports.NewsController = {
  addNews: async (req, res) => {
    try {
      const addedNews = await News.create({
        img: req.body.img,
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
      });
      res.json(addedNews);
    } catch (err) {
      res.json({err: err.message});
    }
  },
  addComment: async (req, res) => {
    try {
      const addedComment = await News.findByIdAndUpdate(req.params.newsId, {
        $push: {
          comments: {
            user: req.body.user,
            text: req.body.text,
          },
        },
      });
      return res.json(addedComment);
    } catch (err) {
      return res.json(err);
    }
  },
  deleteCommentById: async (req, res) => {
    try {
      const deleteComment = await News.findByIdAndUpdate(req.params.id, {
        $pull: {
          comments: {
            _id: req.body.commentId,
          },
        },
      });
      res.json(deleteComment);
    } catch (err) {
      res.json(err);
    }
  },
  getAllNews: async (req, res) => {
    try {
      const allNews = await News.find().populate("category");
      res.json(allNews);
    } catch (err) {
      res.json(err);
    }
  },
  getNewsById: async (req, res) => {
    try {
      const newsById = await News.findById(req.params.id);
      res.json(newsById);
    } catch (err) {
      res.json(err);
    }
  },
  getNewsByCategory: async (req, res) => {
    try {
      const newsCategory = await News.find()
        .populate("category")
        .filter((category) => category.name === req.params.category);
      res.json(newsCategory);
    } catch (err) {
      res.json(err);
    }
  },
  updateNewsById: async (req, res) => {
    try {
      const updatedNews = await News.findByIdAndUpdate(req.params.id, {
        img: req.body.img,
        name: req.body.name,
        desciption: req.body.desciption,
        category: req.body.category,
      });
      res.json(updatedNews);
    } catch (err) {
      res.json(err);
    }
  },
  deleteNewsById: async (req, res) => {
    try {
      const deletedNews = await News.findByIdAndDelete(req.params.id);
      res.json(deletedNews);
    } catch (err) {
      res.json(err);
    }
  },
};
