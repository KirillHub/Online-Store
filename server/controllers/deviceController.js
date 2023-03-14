const catchErrors = require('../errors/asyncCatch');

class DeviceController {
  constructor() {}

  create = catchErrors(async (req, res) => {
    const { name, price, brandId, typeId, info } = req.body;
    const { img } = req.files;

	 
    res.json({ name: name, price: price });
  });

  getAll = async (req, res) => {};

  getOne = async (req, res) => {};
}

module.exports = new DeviceController();
