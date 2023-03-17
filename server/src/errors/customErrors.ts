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


class BadUserInputError extends CustomError {
  constructor(errorData: ErrorData) {
    super('There were validation errors.', 'BAD_USER_INPUT', 400, errorData);
  }
}

class InvalidTokenError extends CustomError {
  constructor(message = 'Authentication token is invalid.') {
    super(message, 'INVALID_TOKEN', 401);
  }
}

export { CustomError, RouteNotFoundError, RequestPathError, BadUserInputError, InvalidTokenError };
