export type ErrorData = { [key: string]: any };

class CustomError extends Error {
  constructor(
    public message: string,
    public code: string | number = 'INTERNAL_ERROR',
    public status: number = 500,
    public data: ErrorData = {}
  ) {
    super();
  }
}

class RouteNotFoundError extends CustomError {
  constructor(originalUrl: string) {
    super(`Route '${originalUrl}' does not exist.`, 'ROUTE_NOT_FOUND', 404);
  }
}

class RequestPathError extends CustomError {
  constructor(url: string) {
    super(`Request parameter path ${url} not found`, 'NOT_CORRECT_PATH_FOR_THIS_REQUEST', 404);
  }
}

class RequestQueryParamError extends CustomError {
  constructor(url: string) {
    super(`Request query param ${url} not found`, 'NOT_CORRECT_QUERY_PARAM', 404);
  }
}

class BadUserInputError extends CustomError {
  constructor(errorData: ErrorData) {
    super('There were validation errors.', 'BAD_USER_INPUT', 400, errorData);
  }
}

class UserExistsError extends CustomError {
  constructor(message = 'This user is already registered') {
    super(message, 'USER_ALREADY_EXISTS', 404);
  }
}

class InvalidTokenError extends CustomError {
  constructor(message = 'Authentication token is invalid.') {
    super(message, 'INVALID_TOKEN', 401);
  }
}

class UserPermissionsError extends CustomError {
  constructor(message = 'You do not have sufficient permissions for this action') {
    super(message, 'NO_ACCESS', 403);
  }
}

class AuthenticationError extends CustomError {
  constructor(message = 'Password or username is not correct') {
    super(message, 'INVALID_PASSWORD_OR_USERNAME', 401);
  }
}

export {
  CustomError,
  RouteNotFoundError,
  RequestPathError,
  RequestQueryParamError,
  BadUserInputError,
  UserExistsError,
  InvalidTokenError,
  AuthenticationError,
  UserPermissionsError,
};
