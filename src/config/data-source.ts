import "dotenv/config";
import { join } from "path";
import { DataSource } from "typeorm";
import { postgres } from "../utils/env.util";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: postgres.host,
  port: Number(postgres.port),
  username: postgres.user,
  password: postgres.password,
  database: postgres.database,
  synchronize: true,
  logging: true,
  entities: [join(__dirname, "src/entities/**/*.entity.ts")],
  subscribers: [join(__dirname, "src/subscribers/**/*.entity.ts")],
  migrations: [join(__dirname, "src/migrations/**/*.entity.ts")],
});
