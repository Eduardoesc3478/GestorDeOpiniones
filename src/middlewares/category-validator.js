import { body, param } from "express-validator";
import { categoryNameExists } from "../helpers/db-validators.js";
import { validarCampos } from "./validate-fields.js";
import { deleteFileOnError } from "./delete-file-on-error.js";
import { handleErrors } from "./handle-errors.js";

export const addCategoryValidator = [
    body("categoryName").notEmpty().withMessage("El nombre es requerido"),
    validarCampos,
    deleteFileOnError,
    handleErrors
];
