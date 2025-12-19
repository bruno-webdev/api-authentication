import { plainToInstance } from "class-transformer";
import { EnvValidation } from "./env.validation";
import { validateSync } from "class-validator";

export const validateEnv = (config: Record<string, unknown>) => {
  const validatedConfig = plainToInstance(EnvValidation, config, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    const errorsData = errors.map(e => Object.values(e.constraints ?? {}).join(', '));
    throw new Error(
      `Invalid environment variables:\n${errorsData.join('\n')}`
    );
  }

  return validatedConfig;
};