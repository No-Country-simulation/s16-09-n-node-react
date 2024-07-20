import { apiResponse } from "@/shared/apiRespond/apiResponse";
import { getInvalid } from "../services/invalid.services";

export const invalid = async (req: any, res: any) => {
  try {
    const invalidResponse = await getInvalid();
    apiResponse(res, 404, 'invalidRoot', invalidResponse);
  } catch (error: any) {
    apiResponse(res, 500, 'invalidRoot', { error: error.message });
  }
};
