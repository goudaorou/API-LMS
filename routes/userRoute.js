const express = require("express");
const { getAllUser, updateUser, deleteUser } = require("../Controllers/userController");
const { verifyToken, checkRole } = require("../middlewares/authMiddleware");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Gestion des utilisateurs
 */

// Middleware pour vérifier le token et le rôle d'administrateur
router.use(verifyToken);
router.use(checkRole("admin"));

// Route pour obtenir tous les utilisateurs
router.get("/", 
  /**
   * @swagger
   * /api/users:
   *   get:
   *     summary: Récupérer tous les utilisateurs
   *     tags: [Users]
   *     responses:
   *       200:
   *         description: Liste de tous les utilisateurs
   *       403:
   *         description: Accès refusé, réservé à l'admin
   */
  getAllUser
);

// Route pour mettre à jour un utilisateur
router.put("/:id", 
  /**
   * @swagger
   * /api/users:
   *   put:
   *     summary: Mettre à jour un utilisateur
   *     tags: [Users]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               name:
   *                 type: string
   *                 description: Le nom de l'utilisateur
   *               email:
   *                 type: string
   *                 description: L'email de l'utilisateur
   *               role:
   *                 type: string
   *                 description: Le rôle de l'utilisateur (par exemple, "admin", "user")
   *     responses:
   *       200:
   *         description: Utilisateur mis à jour avec succès
   *       403:
   *         description: Accès refusé, réservé à l'admin
   *       400:
   *         description: Mauvaises données envoyées
   */
  updateUser
);

// Route pour supprimer un utilisateur
router.delete("/:id", 
  /**
   * @swagger
   * /api/users:
   *   delete:
   *     summary: Supprimer un utilisateur
   *     tags: [Users]
   *     responses:
   *       200:
   *         description: Utilisateur supprimé avec succès
   *       403:
   *         description: Accès refusé, réservé à l'admin
   */
  deleteUser
);

module.exports = router;
