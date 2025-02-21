import { body, param } from "express-validator";
import { categoryNameExists } from "../helpers/db-validators.js";
import { validarCampos } from "./validate-fields.js";
import { deleteFileOnError } from "./delete-file-on-error.js";
import { handleErrors } from "./handle-errors.js";
import { hasRoles } from "./validate-roles.js"
import { validateJWT } from "./validate-jwt.js";
export const addCategoryValidator = [
    validateJWT,
    hasRoles('ADMIN_ROLE'),
    body("categoryName").notEmpty().withMessage("El nombre es requerido"),
    validarCampos,
    deleteFileOnError,
    handleErrors
];

export const getCategoriesValidator = [
    validateJWT,
    hasRoles('ADMIN_ROLE'),
    validarCampos,
    handleErrors
];

export const getCategoryByIdValidator = [
    validateJWT,
    hasRoles('ADMIN_ROLE'),
    param("id").isMongoId().withMessage("No es un ID válido de MongoDB"),
    param("id").custom(categoryNameExists),
    validarCampos,
    handleErrors
];

export const deleteCategoryValidator = [
    validateJWT,
    hasRoles('ADMIN_ROLE'),
    param("id").isMongoId().withMessage("No es un ID válido de MongoDB"),
    param("id").custom(categoryNameExists),
    validarCampos,
    handleErrors
];

export const updateCategoryValidator = [
    validateJWT,
    hasRoles('ADMIN_ROLE'),
    param("id").isMongoId().withMessage("No es un ID válido de MongoDB"),
    param("id").custom(categoryNameExists),
    body("categoryName").notEmpty().withMessage("El nombre es requerido"),
    validarCampos,
    handleErrors
];