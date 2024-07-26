
import { errorProfiler, successProfiler } from "@/shared/apiRespond/responseProfiler";
import { getInvalid } from "../services/invalid.services";

export const invalid = async (req: any, res: any) => {
  try {
    const response = await getInvalid();
    successProfiler(res, 404, 'getInvalid', response);
  } catch (error: any) {
    errorProfiler(error, res, 'getInvalid');
  }
};
