export const config = {
  port: process.env.PORT || 8000,
  jwtSecret: process.env.JWT_SECRET,
  postgres: {
    host: process.env.POSTGRES,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT || 5432,
    database: process.env.POSTGRES_DATABASE,
  },
  dialect: process.env.DIALECT || { postgres: "postgres", mysql: "mysql" },
};
