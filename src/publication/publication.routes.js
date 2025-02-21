import { Router } from "express";
import { addPublication, getPublications, updatePublication ,deletePublication } from "./publication.controller.js";
import { addPublicationValidator, updatePublicationValidator, deletePublicationValidator} from "../middlewares/publication-validator.js";

const router = Router();

router.post("/addPublication", addPublicationValidator, addPublication);

router.get("/", getPublications)

router.put("/updatePublication/:id", updatePublicationValidator, updatePublication )

router.delete("/deletePublication/:id", deletePublicationValidator, deletePublication)

export default router;