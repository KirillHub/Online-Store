import { UserPermissionsError } from '../errors/customErrors.js';
import { catchErrors } from '../errors/asyncCatch.js';
import { checkUser } from '../utils/checkUser.js';

export const checkUserRole = (role: string) => {
  return catchErrors(async (req, _res, next) => {
    const permissionError = new UserPermissionsError();

    const userDecodedData = await checkUser(req, next);

    if (userDecodedData.role !== role) next(permissionError);
    req.user = userDecodedData;
    next();

    /*
	 ? possible var. to check user role by founded email in DB
    const user = await User.findOne({where: userId.email as any});
	 console.log(user);
    if (!user) throw new InvalidTokenError('Authentication token is invalid: User not found.');

    req.user = user;
    next();
	*/
  });
};
