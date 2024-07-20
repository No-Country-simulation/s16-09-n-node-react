import { readFileSync } from 'fs';
import { join } from 'path';

//====================================
// Validation of fields in the model
//====================================
export const isFieldInPrismaModel = (
  modelName: string,
  fieldName: string,
): boolean | null => {
  try {
    // Ruta al archivo de esquema de Prisma
    const schemaPath = join(__dirname, '../../../', 'prisma', 'schema.prisma');
    const schemaContent = readFileSync(schemaPath, { encoding: 'utf-8' });
    // Buscar la definición del modelo
    const modelRegex = new RegExp(`model ${modelName} \\{[^\\}]*\\}`, 's');
    const modelMatch = modelRegex.exec(schemaContent);
    if (!modelMatch) {
      return null; // Modelo no encontrado
    }
    // Buscar la definición del campo en el modelo
    const fieldRegex = new RegExp(`${fieldName} [^\\n]+`, 'g');
    const fieldMatch = fieldRegex.exec(modelMatch[0]);
    if (!fieldMatch) {
      return null; // Campo no encontrado
    }
    // Determinar si el campo es requerido (no opcional)
    if (!fieldMatch[0].includes('?')) {
      return true;
    }
    return false;
  } catch (error) {
    return null;
  }
};
