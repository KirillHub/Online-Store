// const ApiError = require('../error/ApiError');

class UserController {
  constructor() {}
  async registration(req, res) {}

  async login(req, res) {}

  async check(req, res, next) {
    const { id } = req.query;
    if (!id) {
      // return next(ApiError.badRequest('Не задан ID'));
    }
    return res.json(id);
    //  res.json({ message: 'cringe123' });
  }
}

module.exports = new UserController();
