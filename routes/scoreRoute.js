const express = require("express");
const { getUserScore, postScore, getCourseScore } = require("../Controllers/scoreController");
const { verifyToken } = require("../middlewares/authMiddleware");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Scores
 *   description: Gestion des scores des utilisateurs dans un cours
 */

// Déclaration des routes avec la documentation Swagger en haut
router.post("/",
  /**
   * @swagger
   * /api/score:
   *   post:
   *     summary: Ajouter un score à un utilisateur pour un cours donné
   *     tags: [Scores]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               course:
   *                 type: string
   *                 description: L'ID du cours
   *               value:
   *                 type: number
   *                 description: Le score à attribuer à l'utilisateur
   *     responses:
   *       201:
   *         description: Score ajouté avec succès
   *       400:
   *         description: Requête invalide, manque d'information
   */
  verifyToken, postScore
);

router.get("/user/:userId",
  /**
   * @swagger
   * /api/score/user/{userId}:
   *   get:
   *     summary: Obtenir les scores d'un utilisateur spécifique
   *     tags: [Scores]
   *     parameters:
   *       - in: path
   *         name: userId
   *         required: true
   *         schema:
   *           type: string
   *         description: L'ID de l'utilisateur pour lequel les scores sont demandés
   *     responses:
   *       200:
   *         description: Liste des scores de l'utilisateur
   *       404:
   *         description: Utilisateur non trouvé
   */
  verifyToken, getUserScore
);

router.get("/course/:courseId",
  /**
   * @swagger
   * /api/score/course/{courseId}:
   *   get:
   *     summary: Obtenir les scores pour un cours spécifique
   *     tags: [Scores]
   *     parameters:
   *       - in: path
   *         name: courseId
   *         required: true
   *         schema:
   *           type: string
   *         description: L'ID du cours pour lequel les scores sont demandés
   *     responses:
   *       200:
   *         description: Liste des scores pour le cours
   *       404:
   *         description: Cours non trouvé
   */
  verifyToken, getCourseScore
);

module.exports = router;
