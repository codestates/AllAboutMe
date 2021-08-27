const { select, test } = require('../models')

module.exports = {
  test: async (req, res) => {
    const testList = await test.findAll({
      attributes: ['id', 'name']
    });
    return res.status(200).send({ data: {testList}, message:'ok' });

  },
  select: async (req, res) => {
    const testParamsId = req.params.id;

    const result = await select.findAll({
      attributes: ['id', 'name', 'image'],
      where:{testId : testParamsId},
    })
    
    console.log(result)
    // const { email, password } = req.body;
    return res.status(200).send({ "data" : {"test" : result}, message: 'ok'});
  },
}