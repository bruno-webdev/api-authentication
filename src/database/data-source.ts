import { DataSource } from "typeorm";
import { databaseCredentials } from "./database.credentials";

export default new DataSource({
  ...databaseCredentials(),

  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  migrations: [__dirname + '/migrations/*.{js,ts}'],
});