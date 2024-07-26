import { statusCodes } from "../data/statusCode";
import { Response } from "express";

const findStatusCode = (code: string) => {
  if (!Array.isArray(statusCodes)) return null;
  return statusCodes
    .flatMap((item) => item.codes)
    .find((item) => item.code === code.toString());
};

export const apiResponse = (res: Response, code: number, endPoint: string, data: any): {} => {
  const isValidCode =
    code > 99 && code < 600 && code !== null && code !== undefined;
  if (isValidCode) {
    const foundData = findStatusCode(code.toString()) as { code: string; description: string; status?: string | undefined };
    if (foundData) {
      foundData.status = statusCodes[Number(code.toString().slice(0, -2)) - 1]?.status;
      return res.status(code).json({
        code: code,
        status: foundData.status,
        limit: res.get("RateLimit-Limit"),
        remaining: res.get("RateLimit-Remaining"),
        description: foundData.description,
        endPoint: endPoint,
        data: data || {message:"no data"},
      });
    } else {
      return res.status(404).json({
        code: 404,
        status: "Error",
        limit: res.get("RateLimit-Limit"),
        remaining: res.get("RateLimit-Remaining"),
        description: "Not found",
        endPoint: endPoint,
        data: {
          msg: "Unassigned code",
        },
      });
    }
  } else {
    return res.status(404).json({
      code: 404,
      status: "error",
      limit: res.get("RateLimit-Limit"),
      remaining: res.get("RateLimit-Remaining"),
      description: "Not found",
      endPoint: endPoint,
      data: {
          msg: "Invalid code",
        },
    });
  }
};
