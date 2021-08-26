module.exports = {
  test: (req, res) => {
    // const { email, password } = req.body;
    return res.status(200).send('test');
  },
  select: (req, res) => {
    // const { email, password } = req.body;
    return res.status(200).send('select');
  },
}