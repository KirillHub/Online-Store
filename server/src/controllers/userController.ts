
import { catchErrors } from '../errors/asyncCatch.js';

export class UserController {
  constructor() {}
  registration = catchErrors(async (_req, _res) => {});

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

