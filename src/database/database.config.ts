import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { databaseCredentials } from "./database.credentials";

export const databaseConfig = (): TypeOrmModuleOptions => ({
  ...databaseCredentials(),
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: process.env.NODE_ENV === 'development',
  logging: process.env.NODE_ENV === 'development',
});