import { Router } from "express";
import { addCategory, getCategories, findCategory, deleteCategory, updateCategory } from "./category.controller.js";
import { addCategoryValidator, getCategoryByIdValidator, deleteCategoryValidator, updateCategoryValidator } from "../middlewares/category-validator.js";

/**
 * @swagger
 * /addCategory:
 *   post:
 *     summary: Add a new category
 *     tags: [Category]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Category created successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Internal server error
 *     security:
 *       - bearerAuth: []
 */
const router = Router();

router.post("/addCategory", addCategoryValidator, addCategory);

/**
 * @swagger
 * /:
 *   get:
 *     summary: Get all categories
 *     tags: [Category]
 *     responses:
 *       200:
 *         description: List of categories
 *       500:
 *         description: Internal server error
 */
router.get("/", getCategories);

/**
 * @swagger
 * /findCategory/{id}:
 *   get:
 *     summary: Find a category by ID
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Category ID
 *     responses:
 *       200:
 *         description: Category found
 *       404:
 *         description: Category not found
 *       500:
 *         description: Internal server error
 */
router.get("/findCategory/:id", getCategoryByIdValidator, findCategory);

/**
 * @swagger
 * /deleteCategory/{id}:
 *   delete:
 *     summary: Delete a category
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Category ID
 *     responses:
 *       200:
 *         description: Category deleted successfully
 *       404:
 *         description: Category not found
 *       500:
 *         description: Internal server error
 *     security:
 *       - bearerAuth: []
 */
router.delete("/deleteCategory/:id", deleteCategoryValidator, deleteCategory);

/**
 * @swagger
 * /updateCategory/{id}:
 *   put:
 *     summary: Update a category
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Category ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Category updated successfully
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Category not found
 *       500:
 *         description: Internal server error
 *     security:
 *       - bearerAuth: []
 */
router.put("/updateCategory/:id", updateCategoryValidator, updateCategory);

export default router;