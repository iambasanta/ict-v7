import express, { Application } from "express";
import "dotenv/config";

const app: Application = express();
const PORT = process.env.PORT || 8000;

app.listen(PORT, (): void => {
  console.log(`Listening on ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
