const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

const app = express();
const Port = 5000;

// Connexion à la base de données
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes principales
app.use("/api/auth", require("./routes/authRoute"));
app.use("/api/user", require("./routes/userRoute"));
app.use("/api/course", require("./routes/courseRoute"));
app.use("/api/score", require("./routes/scoreRoute"));

// Swagger documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Lancement du serveur
app.listen(Port, () =>
  console.log(`✅ Serveur démarré sur le port ${Port}`)
);
