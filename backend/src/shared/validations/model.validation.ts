import { readFileSync } from 'node:fs';
import path from 'node:path';

interface ValidateObject {
  [key: string]: any;
}

//=====================
// Class Field Error
//=====================
export class FieldError extends Error {
  constructor(
    public key: string,
    public message: string,
  ) {
    super(`${key}: ${message}`);
  }
}

//=====================
// Load Model Fields
//=====================
const loadModelFields = (modelName: string): Set<string> => {
  const schemaPath = path.join(
    __dirname,
    '../../../',
    'prisma',
    'schema.prisma',
  );
  const modelString: string = readFileSync(schemaPath, 'utf8');
  const regex = new RegExp(`model ${modelName} {([\\s\\S]*?)}`, 'm');
  const modelMatch = regex.exec(modelString);
  if (!modelMatch || !modelMatch[1]) {
    throw new FieldError('Model Error', `Model ${modelName} not found`);
  }

  const fields = modelMatch[1]
    .split('\n')
    .map((line) => {
      const match = /^(\w+)/.exec(line.trim());
      return match ? match[1] : undefined;
    })
    .filter((field): field is string => field !== undefined);

  return new Set(fields);
};

//==========================
// Validate keys in model
//==========================
export const validateKeysInPrismaModel = (
  modelName: string,
  validateObject: ValidateObject,
): ValidateObject => {
  const modelFields = loadModelFields(modelName);
  const errors: string[] = [];
  const validKeys: ValidateObject = {};
  Object.keys(validateObject).forEach((key) => {
    if (modelFields.has(key)) {
      validKeys[key] = validateObject[key];
    } else {
      errors.push(`The ${key} field does not belong to the model ${modelName}`);
    }
  });
  if (errors.length > 0) {
    throw new FieldError('Field Error', errors.join(', '));
  }
  return validKeys;
};
