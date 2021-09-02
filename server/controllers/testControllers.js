const { select, test } = require('../models')

module.exports = {
  test: async (req, res) => {
    try {
      const testList = await test.findAll({
        attributes: ['id', 'name', 'image']
      });
      return res.status(200).send({ data: {testList}, message:'ok' });
    } catch (err) {
      res.status(404).send({ data: null, message: 'cannot load test' });
    }
  },
  select: async (req, res) => {
    const testId = req.params.id;
    try {
      const result = await select.findAll({
        attributes: ['id', 'name', 'image', 'testId'],
        where: { testId },
      })
      return res.status(200).send({ data : { test : result }, message: 'ok'});
    } catch (err) {
      return res.status(404).send({ data: null, message: 'cannot load test select' })
    }
  },
}