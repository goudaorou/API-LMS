const express = require("express");
const { getCourse, postCourse, updateCourse, deleteCourse, enrollCourse } = require("../Controllers/courseController");
const { verifyToken, checkRole } = require("../middlewares/authmiddleware");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Courses
 *   description: Gestion des cours
 */

// Route pour obtenir tous les cours
router.get("/", 
  /**
   * @swagger
   * /api/course:
   *   get:
   *     summary: Récupérer tous les cours
   *     tags: [Courses]
   *     responses:
   *       200:
   *         description: Liste des cours
   */
  getCourse
);

// Route pour créer un cours (réservée à l'admin)
router.post("/", 
  /**
   * @swagger
   * /api/course:
   *   post:
   *     summary: Ajouter un nouveau cours
   *     tags: [Courses]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               title:
   *                 type: string
   *                 description: Le titre du cours
   *               description:
   *                 type: string
   *                 description: La description du cours
   *               instructor:
   *                 type: string
   *                 description: L'instructeur du cours
   *     responses:
   *       201:
   *         description: Cours créé avec succès
   *       403:
   *         description: Accès refusé, réservé à l'admin
   */
  verifyToken, checkRole("admin"), postCourse
);

// Route pour mettre à jour un cours (réservée à l'admin)
router.put("/:id", 
  /**
   * @swagger
   * /api/course/{id}:
   *   put:
   *     summary: Mettre à jour un cours
   *     tags: [Courses]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: string
   *         description: ID du cours à mettre à jour
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               title:
   *                 type: string
   *                 description: Le titre du cours
   *               description:
   *                 type: string
   *                 description: La description du cours
   *               instructor:
   *                 type: string
   *                 description: L'instructeur du cours
   *     responses:
   *       200:
   *         description: Cours mis à jour avec succès
   *       403:
   *         description: Accès refusé, réservé à l'admin
   *       404:
   *         description: Cours non trouvé
   */
  verifyToken, checkRole("admin"), updateCourse
);

// Route pour supprimer un cours (réservée à l'admin)
router.delete("/:id", 
  /**
   * @swagger
   * /api/course/{id}:
   *   delete:
   *     summary: Supprimer un cours
   *     tags: [Courses]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: string
   *         description: ID du cours à supprimer
   *     responses:
   *       200:
   *         description: Cours supprimé avec succès
   *       403:
   *         description: Accès refusé, réservé à l'admin
   *       404:
   *         description: Cours non trouvé
   */
  verifyToken, checkRole("admin"), deleteCourse
);

// Route pour inscrire un utilisateur à un cours
router.post("/:id/enroll", 
  /**
   * @swagger
   * /api/course/{id}/enroll:
   *   post:
   *     summary: Inscrire un utilisateur à un cours
   *     tags: [Courses]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: string
   *         description: ID du cours auquel l'utilisateur souhaite s'inscrire
   *     responses:
   *       200:
   *         description: Utilisateur inscrit avec succès au cours
   *       404:
   *         description: Cours non trouvé
   */
  verifyToken, enrollCourse
);

module.exports = router;
