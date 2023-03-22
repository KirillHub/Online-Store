import { Request } from 'express';
import { BaseUserInter } from '../types/request.js';
import { catchErrors } from '../errors/asyncCatch.js';
import { AuthenticationError, BadUserInputError, UserExistsError } from '../errors/customErrors.js';
import { Basket, User } from '../associations/modelAssociations.js';
import { hash, compareSync } from 'bcrypt';
import { signToken } from '../utils/authToken.js';
import { options } from '../config/tokenOptions.js';

export class UserController {
  constructor() {}
  registration = catchErrors(async (req: Request<{}, {}, BaseUserInter>, res, next) => {
    const { email, password, role, name } = req.body;
    const authError = new AuthenticationError();
    const userExistError = new UserExistsError();

    if (!email || !password) return next(authError);

    const candidate = await User.findOne({ where: { email } });
    if (candidate) return next(userExistError);

    const hashPassword = await hash(password, 5);
    const user = await User.create({
      email: email,
      name: name,
      role,
      password: hashPassword,
    });

    const basket = await Basket.create({});
    await basket.setUser(user.id);

    const token = signToken({ id: user.id, email: user.email, role: user.role }, options);

    return res.json({ token });
  });

  login = catchErrors(async (req: Request<{}, {}, BaseUserInter>, res, next) => {
    const { email, password} = req.body;
    const user = await User.findOne({ where: { email } });
    const userExistError = new UserExistsError();
    const authError = new AuthenticationError();

    if (!user) return next(userExistError);

    let comparePassword = compareSync(password, user.password);
    if (!comparePassword) return next(authError);

    const token = signToken({ id: user.id, email: user.email, role: user.role });
    return res.json({ token });
  });

  check = catchErrors(async (req, res) => {
    const { id } = req.query;
    if (!id) {
      // return next(ApiError.badRequest('Не задан ID'));
    }
    return res.json(id);
    //  res.json({ message: 'cringe123' });
  });
}
