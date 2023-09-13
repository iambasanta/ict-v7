import express, { Application } from "express";
import "dotenv/config";
import cors from "cors";
import morgan from "morgan";
import indexRoutes from "./routes/index.routes";
import { AppDataSource } from "./config/data-source";
const app = express();
const PORT = process.env.PORT || 8000;

if (process.env.NODE_ENV && process.env.NODE_ENV === "development") {
  app.use(
    cors({
      origin: "*",
      credentials: true,
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    }),
  ); //before routes
} else {
  app.use(cors({ origin: "www.ictmeetupv7.com" }));
}

AppDataSource.initialize()
  .then(() => {
    app.use(express.json());
    app.use("/api", indexRoutes);

    console.log("DATABASE CONNECTION ESTABLISHED");
    app.listen(PORT, () => {
      console.log(`Listening on ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("ERROR: ", error);
  });
export default app;
