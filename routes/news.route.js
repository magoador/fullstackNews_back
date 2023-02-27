const { Router } = require("express");
const { NewsController } = require("../controllers/news.controller");

const router = Router();

router.get("/news", NewsController.getAllNews);
router.get("/news/:id", NewsController.getNewsById);
router.post("/news", NewsController.addNews);
router.patch("/news/:id/add/comment", NewsController.addComment);
router.patch('/news/:id/delete/comment', NewsController.deleteCommentById)
router.patch("/news/update/:id", NewsController.updateNewsById);
router.delete("/news/delete/:id", NewsController.deleteNewsById);

module.exports = router;
