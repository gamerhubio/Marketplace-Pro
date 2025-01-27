import dotenv from "dotenv";
import "express-async-errors";
dotenv.config();

import express from "express";
const app = express();

import connectDB from "./db/connect";
import authRouter from "./routes/authRoute";
import userRouter from "./routes/userRoute";
import gameRouter from "./routes/gamesRoute";
import subscriptionRouter from "./routes/subscriptionRoute";
import favoriteRouter from "./routes/favoriteRoute";
import confirmationRouter from "./routes/confirmationRoute";
import blockchainRouter from "./routes/blockchainRoute";
import passwordRoute from "./routes/passwordRoute";

import notFoundMiddleware from "./middleware/not-found";
import errorHandlerMiddleware from "./middleware/error-handler";
import authMiddleware from "./middleware/authMiddleware";

import cors from "cors";

// middleware
// app.use(
//   cors({
//     origin: [
//       "http://localhost:3000",
//       "http://127.0.0.1:3000",
//       "https://www.gamer-hub.io",
//     ],
//     credentials: true,
//   })
// );

app.use(cors());

app.use(express.static("./public"));
app.use(express.json());

// Public routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/games", gameRouter);
app.use("/api/v1/confirm", confirmationRouter);
app.use("/api/v1/blockchainroute", blockchainRouter);
app.use("/api/v1/forgot-password", passwordRoute);

// Restricted routes
app.use("/api/v1/users", authMiddleware, userRouter);
app.use("/api/v1/favorites", authMiddleware, favoriteRouter);
app.use("/api/v1/subscription", authMiddleware, subscriptionRouter);

// Error middlewares
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 10000;

// Start server
const start = async () => {
  try {
    await connectDB(`${process.env.MONGO_URI}`);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
