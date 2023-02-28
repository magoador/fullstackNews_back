const { Router } = require("express");
const { categoryController } = require("../controllers/category.controller");

const router = Router();

router.get('/category', categoryController.getAllCategories)
router.get('/category/:id', categoryController.getCategoryById)
router.post('/category', categoryController.addCategory)
router.delete('/category/delete/:id', categoryController.deleteCategoryById)
router.patch('/category/update/:id', categoryController.updateCategoryById)

module.exports = router;
