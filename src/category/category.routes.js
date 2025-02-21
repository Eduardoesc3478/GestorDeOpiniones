import { Router } from "express";
import { addCategory, getCategories, findCategory, deleteCategory, updateCategory } from "./category.controller.js";
import { addCategoryValidator, getCategoryByIdValidator, deleteCategoryValidator, updateCategoryValidator } from "../middlewares/category-validator.js";


const router = Router();

router.post("/addCategory", addCategoryValidator, addCategory);

router.get("/", getCategories);

router.get("/findCategory/:id", getCategoryByIdValidator, findCategory);

router.delete("/deleteCategory/:id", deleteCategoryValidator, deleteCategory);

router.put("/updateCategory/:id", updateCategoryValidator, updateCategory);

export default router; 