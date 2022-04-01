require("dotenv").config();
require("./db/connect");
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const app = express();
const morgan = require("morgan");
const addressRouter = require("./routes/address");
const tokenRouter = require("./routes/token");
const userRouter = require("./routes/user");
const profileRouter = require("./routes/profile");
const socialProfileRouter = require("./routes/socialProfile");
const profileLinksRouter = require("./routes/profileLink");
const authUserRouter = require("./routes/auth");
const scanTransactionRouter = require("./routes/scanTransaction")

app.use(morgan("tiny"));
app.use(express.json());
app.use("/api/v1/address", addressRouter);
app.use("/api/v1/token", tokenRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/profile", profileRouter);
app.use("/api/v1/social_profile", socialProfileRouter);
app.use("/api/v1/profile_link", profileLinksRouter);
app.use("/api/v1/auth", authUserRouter);
app.use("/api/v1/scan_transactions", scanTransactionRouter);
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;
