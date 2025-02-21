import { body, param } from "express-validator";
import { publicationExists } from "../helpers/db-validators.js";
import { validarCampos } from "./validate-fields.js";
import { deleteFileOnError } from "./delete-file-on-error.js";
import { handleErrors } from "./handle-errors.js";
import { hasRoles } from "./validate-roles.js"
import { validateJWT } from "./validate-jwt.js";


export const addPublicationValidator = [
   
    body("title").notEmpty().withMessage("El título es requerido"),
    body("title").isLength({ max: 25 }).withMessage("El título no puede exceder los 25 caracteres"),
    body("text").notEmpty().withMessage("El contenido de la publicación es requerido"),
    body("text").isLength({ max: 100 }).withMessage("El contenido no puede exceder los 100 caracteres"),
    body("category").notEmpty().withMessage("La categoría es requerida"),
    body("category").isMongoId().withMessage("Debe ser un ID válido de MongoDB"),
    body("user").notEmpty().withMessage("El usuario es requerido"),
    body("user").isMongoId().withMessage("Debe ser un ID válido de MongoDB"),
    validarCampos, 
    deleteFileOnError,
    handleErrors 
];