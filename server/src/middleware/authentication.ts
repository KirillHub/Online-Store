import { InvalidTokenError } from '../errors/customErrors.js';
import { catchErrors } from '../errors/asyncCatch.js';
import { getAuthTokenFromRequest, verifyToken } from '../utils/authToken.js';
import { User } from '../associations/modelAssociations.js';

export const authenticateUser = catchErrors(async (req, _res, next) => {
  const token = getAuthTokenFromRequest(req);
  if (req.method === 'OPTIONS') next();

  if (!token) throw new InvalidTokenError('Authentication token not found.');

  const userId = verifyToken(token);
  if (!userId) throw new InvalidTokenError('Authentication token is invalid.');

  const user = await User.findOne(userId);
  if (!user) throw new InvalidTokenError('Authentication token is invalid: User not found.');

  req.user = user;
  next();
});
