import { Router } from "express";
import { addPublication, getPublications, updatePublication ,deletePublication } from "./publication.controller.js";
import { addPublicationValidator, updatePublicationValidator, deletePublicationValidator} from "../middlewares/publication-validator.js";

/**
 * @swagger
 * /addPublication:
 *   post:
 *     summary: Add a new publication
 *     tags: [Publication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       201:
 *         description: Publication created successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Internal server error
 *     security:
 *       - bearerAuth: []
 */
const router = Router();

router.post("/addPublication", addPublicationValidator, addPublication);

/**
 * @swagger
 * /:
 *   get:
 *     summary: Get all publications
 *     tags: [Publication]
 *     responses:
 *       200:
 *         description: List of publications
 *       500:
 *         description: Internal server error
 */
router.get("/", getPublications)

/**
 * @swagger
 * /updatePublication/{id}:
 *   put:
 *     summary: Update a publication
 *     tags: [Publication]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Publication ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       200:
 *         description: Publication updated successfully
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Publication not found
 *       500:
 *         description: Internal server error
 *     security:
 *       - bearerAuth: []
 */
router.put("/updatePublication/:id", updatePublicationValidator, updatePublication )

/**
 * @swagger
 * /deletePublication/{id}:
 *   delete:
 *     summary: Delete a publication
 *     tags: [Publication]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Publication ID
 *     responses:
 *       200:
 *         description: Publication deleted successfully
 *       404:
 *         description: Publication not found
 *       500:
 *         description: Internal server error
 *     security:
 *       - bearerAuth: []
 */
router.delete("/deletePublication/:id", deletePublicationValidator, deletePublication)

export default router;