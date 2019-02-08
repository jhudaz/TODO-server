const models = require('../../models');

const getToDos = async (req, res) => {
  const todos = await models.ToDo.findAll({
    where: {
      UserId: req.query.token
    }
  });
  res.json(todos);
}

const updateToDo = async (req, res) => {
  const todoUpdated = await models.ToDo.update({
    description: req.body.description,
    done: req.body.done
  },
    {
      where: {
        id: req.body.id
      }
    });
  res.json(todoUpdated);
}

module.exports = { getToDos, updateToDo }
