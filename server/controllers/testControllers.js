const { test } = require('../models')

module.exports = {
  test: async (req, res) => {
    const testList = await test.findAll({
      attributes: ['id', 'name']
    });
    return res.status(200).send({ data: testList });
  },
  select: (req, res) => {
    // const { email, password } = req.body;
    return res.status(200).send('select');
  },
}