import { Router } from "express";
import { addPublication } from "./publication.controller.js";
import { addPublicationValidator } from "../middlewares/publication-validator.js";

const router = Router();

router.post("/addPublication", addPublicationValidator, addPublication);

export default router;