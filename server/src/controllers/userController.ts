import { Request } from 'express';
import { BaseUserInter } from '../types/request.js';
import { catchErrors } from '../errors/asyncCatch.js';
import { AuthenticationError, BadUserInputError, UserExistsError } from '../errors/customErrors.js';
import { Basket, User } from '../associations/modelAssociations.js';
import bcrypt from 'bcrypt';
import jwt, { SignOptions } from 'jsonwebtoken';
import { InferCreationAttributes } from 'sequelize';
import { Basket as BasketModel } from '../types/models.js';
import { signToken } from '../utils/authToken.js';
import { options } from '../config/tokenOptions.js';

const generateJwt = (id: number, email: string, role?: string) => {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY!, { expiresIn: '24h' });
};

export class UserController {
  constructor() {}
  registration = catchErrors(async (req: Request<{}, {}, BaseUserInter>, res, next) => {
    const { email, password, role } = req.body;
    const authError = new AuthenticationError();
    const userExistError = new UserExistsError();

    if (!email || !password) {
      return next(authError);
    }
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      return next(userExistError);
    }

    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({ email, role, password: hashPassword });
    //  const basket = await Basket.create({ userId: user.id } as InferCreationAttributes<any>);
    // const basket = await Basket.setUserId();

    const basket = await Basket.create({});
    basket.userId(user.id as unknown as any);
    //  const jwt = jwt.sing({id: user.id});

    //  const jws = jwt.sign({ id: user.id, email, role }, 'your_secret_key', options);
    const token = signToken({ id: user.id, email, role }, options);

    return res.json({ token });
  });

  login = catchErrors(async (_req, _res) => {});

  check = catchErrors(async (req, res) => {
    const { id } = req.query;
    if (!id) {
      // return next(ApiError.badRequest('Не задан ID'));
    }
    return res.json(id);
    //  res.json({ message: 'cringe123' });
  });
}
