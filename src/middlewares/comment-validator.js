import { body, param } from "express-validator";
import { commentExists } from "../helpers/db-validators.js";
import { validarCampos } from "./validate-fields.js";
import { deleteFileOnError } from "./delete-file-on-error.js";
import { handleErrors } from "./handle-errors.js";
import { hasRoles } from "./validate-roles.js"
import { validateJWT } from "./validate-jwt.js";

export const addCommentValidator = [
    validateJWT,
    hasRoles("USER_ROLE", "ADMIN_ROLE"),
    body("content").notEmpty().withMessage("El comentario es requerido"),
    body("content").isLength({ min: 5 }).withMessage("El comentario debe tener al menos 5 caracteres"),
    body("content").isLength({ max: 1000 }).withMessage("El comentario debe tener máximo 1000 caracteres"),
    validarCampos,
    deleteFileOnError,
    handleErrors
];

export const updateCommentValidator = [
    validateJWT,
    hasRoles("USER_ROLE", "ADMIN_ROLE"),
    param("cid").custom(commentExists),
    body("content").notEmpty().withMessage("El comentario es requerido"),
    body("content").isLength({ min: 5 }).withMessage("El comentario debe tener al menos 5 caracteres"),
    body("content").isLength({ max: 1000 }).withMessage("El comentario debe tener máximo 1000 caracteres"),
    validarCampos,
    deleteFileOnError,
    handleErrors
];


export const deleteCommentValidator = [
    validateJWT,    
    hasRoles("USER_ROLE", "ADMIN_ROLE"),
    param("cid").custom(commentExists),
    validarCampos,
    deleteFileOnError,
    handleErrors
];


