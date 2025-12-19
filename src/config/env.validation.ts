import { Transform } from "class-transformer";
import { IsEnum, IsInt, IsNotEmpty, IsString } from "class-validator";

export class EnvValidation {
  @IsEnum(['development', 'production', 'test'])
  NODE_ENV: string;

  @IsNotEmpty()
  @IsInt()
  @Transform(({ value }) => Number(value))
  PORT: number;

  @IsNotEmpty()
  @IsString()
  DATABASE_HOST: string;
  
  @IsInt()
  @IsNotEmpty()
  @Transform(({ value }) => Number(value))
  DATABASE_PORT: number;

  @IsNotEmpty()
  @IsString()
  DATABASE_USER: string;

  @IsNotEmpty()
  @IsString()
  DATABASE_PASSWORD: string;

  @IsNotEmpty()
  @IsString()
  DATABASE_NAME: string;

  @IsNotEmpty()
  @IsString()
  JWT_SECRET: string;

  @IsNotEmpty()
  @IsString()
  JWT_EXPIRATION: string;

  @IsNotEmpty()
  @IsString()
  JWT_REFRESH_SECRET: string;

  @IsNotEmpty()
  @IsString()
  JWT_REFRESH_EXPIRATION: string;

  @IsNotEmpty()
  @IsInt()
  @Transform(({ value }) => Number(value))
  THROTTLE_TTL: number;

  @IsNotEmpty()
  @IsInt()
  @Transform(({ value }) => Number(value))
  THROTTLE_LIMIT: number;
}