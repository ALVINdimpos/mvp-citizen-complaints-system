import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";

const { DB_URL } = process.env;

export const AppDataSource = new DataSource({
  type: "postgres",
  url: DB_URL,
  synchronize: true,
  logging: false,
  entities: [`${__dirname}/**/**/*.entity.{ts,js}`],
  migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
  ssl: ["localhost", "host.docker.internal"].includes(String(DB_URL))
    ? false
    : {
        rejectUnauthorized: false,
      },
});
