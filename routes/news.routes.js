const { Router } = require("express");

const authMiddleware = require('../models/middlewares/auth.middleware')
const { NewsController } = require("../controllers/news.controller");
const adminMiddleware = require("../models/middlewares/admin.middleware");

const router = Router();

router.get("/news", NewsController.getAllNews);
router.get("/news/:id", NewsController.getNewsById);
router.get("/news/:category", NewsController.getNewsByCategory);
router.post("/news", adminMiddleware, NewsController.addNews);
router.patch("/news/:newsId/add/comment", authMiddleware, NewsController.addComment);
router.patch('/news/:id/delete/comment', NewsController.deleteCommentById)
router.patch("/news/update/:id", NewsController.updateNewsById);
router.delete("/news/delete/:id", NewsController.deleteNewsById);

module.exports = router;
