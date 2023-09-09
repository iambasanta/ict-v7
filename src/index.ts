import express, { Application } from "express";
import "dotenv/config";
import cors from "cors";
import morgan from "morgan";
import indexRoutes from "./routes/index.routes";
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

app.get("/", (req, res) => {
  res.send("ICt v7 API is Working!");
});

app.use(express.json());
app.use("/api", indexRoutes);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
export default app;
