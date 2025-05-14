const express = require("express");
const { register, login } = require("../Controllers/authController");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentification des utilisateurs
 */

// Route d'inscription
router.post("/register", 
  /**
   * @swagger
   * /api/auth/register:
   *   post:
   *     summary: Inscrire un nouvel utilisateur
   *     tags: [Auth]
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
   *               password:
   *                 type: string
   *                 description: Le mot de passe de l'utilisateur
   *     responses:
   *       201:
   *         description: Utilisateur enregistré avec succès
   *       400:
   *         description: Erreur dans les informations envoyées
   */
  register
);

// Route de connexion
router.post("/login", 
  /**
   * @swagger
   * /api/auth/login:
   *   post:
   *     summary: Se connecter à la plateforme
   *     tags: [Auth]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               email:
   *                 type: string
   *                 description: L'email de l'utilisateur
   *               password:
   *                 type: string
   *                 description: Le mot de passe de l'utilisateur
   *     responses:
   *       200:
   *         description: Connexion réussie, jeton JWT retourné
   *       401:
   *         description: Échec de la connexion (mauvais identifiants)
   */
  login
);

module.exports = router;
