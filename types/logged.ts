import { get, isObject } from "lodash-es";

export type ErrorResponse = {
  statusCode: number;
  message: string;
  error: string;
  timestamp: string;
  path: string;
};

export type UserProfileType = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  userType: string;
  isVerified: boolean;
};

export type RegistrationResponse<T> = {
  message: string;
  user: T;
  accessToken: string;
};

export function isErrorResponse(
  data: Record<string, unknown>,
): data is ErrorResponse {
  return isObject(data) && get(data, "statusCode") === 400;
}

export function isServerErrorResponse(
  data: Record<string, unknown>,
): data is ErrorResponse {
  return (
    isObject(data) &&
    get(data, "statusCode") === 500 &&
    get(data, "message") === "Internal Server Error"
  );
}
