const express = require('express');
const ToDoController = require('./ToDoController');
const router = express.Router();

router.get('/todo', ToDoController.getToDos);
router.put('/todo', ToDoController.updateToDo);

module.exports = router;
