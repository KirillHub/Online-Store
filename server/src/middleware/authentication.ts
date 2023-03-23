import { InvalidTokenError } from '../errors/customErrors.js';
import { catchErrors } from '../errors/asyncCatch.js';
import { User } from '../associations/modelAssociations.js';
import { checkUser } from '../utils/checkUser.js';

export const authenticateUser = catchErrors(async (req, _res, next) => {
  const tokenError = new InvalidTokenError('Authentication token is invalid: User not found.');

  const userDecodedData = await checkUser(req, next);
  const user = await User.findOne(userDecodedData);

  if (!user) return next(tokenError);

  req.user = user;
  next();
});
