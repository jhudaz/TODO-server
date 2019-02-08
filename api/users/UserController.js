const models = require('../../models');

const authenticate = async (req, res) => {
  const singleUser = await models.User.findAll({
    where: {
      email: req.body.email,
      password: req.body.password
    }
  });
  if (singleUser.length > 0) {
    res.json({
      success: true,
      token: singleUser[0].id
    })
  } else {
    res.json({
      success: false,
      message: `Sorry, the user doesn't exist, try again`
    })
  }
}

const getUser = async (req, res) => {
  const User = await models.User.findOne({
    where: {
      id: req.query.token
    },
    attributes: ['id', 'name', 'email']
  });
  res.json(User || {});
}

module.exports = { authenticate, getUser }