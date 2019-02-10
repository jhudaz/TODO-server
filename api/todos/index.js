const express = require('express');
const ToDoController = require('./ToDoController');
const router = express.Router();

router.get('/todo', ToDoController.getToDos);
router.put('/todo', ToDoController.updateToDo);
router.put('/todoState', ToDoController.updateToDoState);
router.post('/todo', ToDoController.createToDo);
router.delete('/todo', ToDoController.deleteToDo);

module.exports = router;
