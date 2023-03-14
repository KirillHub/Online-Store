// const ApiError = require('../errors/ApiError');
const Type = require('../models/Type');

class TypeController {
  constructor() {}

  async create(req, res) {
    const { name } = req.body;
    const type = await Type.create({ name });
    return res.json(type);
  }

  async getAll(req, res) {
    const types = await Type.findAll();
    return res.json(types);
  }

  async deleteType(req, res, next) {
    let queryParam;
    const query = req.query;

    if (query.id || query.name) {
      typeof query.id !== 'undefined' ? (queryParam = query.id) : (queryParam = query.name);

      res.json({ success: `type with ${queryParam} - deleted` });
    }
   //  return next(ApiError.badRequest('No product type found with this type'));
  }
}

module.exports = new TypeController();
