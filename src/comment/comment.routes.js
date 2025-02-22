import {Router} from "express";
import {addComment , updateComment, deleteComment} from "./comment.controller.js";
import {addCommentValidator, updateCommentValidator, deleteCommentValidator} from "../middlewares/comment-validator.js";

/**
 * @swagger
 * /addComment:
 *   post:
 *     summary: Add a new comment
 *     tags: [Comment]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *               publicationId:
 *                 type: string
 *     responses:
 *       201:
 *         description: Comment added successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Internal server error
 *     security:
 *       - bearerAuth: []
 */
const router = Router();

router.post("/addComment",addCommentValidator, addComment);

/**
 * @swagger
 * /updateComment/{cid}:
 *   patch:
 *     summary: Update a comment
 *     tags: [Comment]
 *     parameters:
 *       - in: path
 *         name: cid
 *         schema:
 *           type: string
 *         required: true
 *         description: Comment ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *     responses:
 *       200:
 *         description: Comment updated successfully
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Comment not found
 *       500:
 *         description: Internal server error
 *     security:
 *       - bearerAuth: []
 */
router.patch("/updateComment/:cid",updateCommentValidator, updateComment);

/**
 * @swagger
 * /deleteComment/{cid}:
 *   delete:
 *     summary: Delete a comment
 *     tags: [Comment]
 *     parameters:
 *       - in: path
 *         name: cid
 *         schema:
 *           type: string
 *         required: true
 *         description: Comment ID
 *     responses:
 *       200:
 *         description: Comment deleted successfully
 *       404:
 *         description: Comment not found
 *       500:
 *         description: Internal server error
 *     security:
 *       - bearerAuth: []
 */
router.delete("/deleteComment/:cid",deleteCommentValidator, deleteComment);

export default router;