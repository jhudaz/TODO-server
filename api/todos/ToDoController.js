const models = require('../../models');

const getToDos = async (req, res) => {
  const todos = await models.ToDo.findAll({
    where: {
      UserId: req.query.token
    },
    order: [
      ['id', 'ASC']
    ]

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

const updateToDoState = async (req, res) => {
  const todoUpdated = await models.ToDo.update({
    done: req.body.done
  },
    {
      where: {
        id: req.body.id
      }
    });
  res.json(todoUpdated);
}

const createToDo = async (req, res) => {
  const todoCreated = await models.ToDo.create({
    description: req.body.description,
    UserId: req.body.UserId,
    done: false
  });
  res.json(todoCreated);
}

const deleteToDo = async (req, res) => {
  const todoDeleted = await models.ToDo.destroy({
    where: {
      id: req.body.id
    }
  })
  res.json(todoDeleted);
}
module.exports = {
  getToDos,
  updateToDo,
  updateToDoState,
  createToDo,
  deleteToDo
}
