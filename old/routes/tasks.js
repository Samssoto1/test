const express = require('express');
const { body } = require('express-validator'); // provides sanitizing / validation
const router = express.Router();

const tasksController = require('../controllers/tasks');

router.get('/daily-tasks', tasksController.getDailyTasks);

// router.post('/add-task', [body('taskTitle').isString().isLength({min:1}).trim(),
// body('taskCategory').isString().isLength({min:1}).trim(),
// body('taskDateTime').matches('[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}'), //regex here), HTML datetime-local input format = YYYY-MM-DDThh:mm
// body('taskDescription').isString().trim()
// ], 
// tasksController.postAddNewTask)
router.post('/add-task', tasksController.postAddNewTask);

// const taskTitle = req.body.taskTitle;
//     const taskCategory = req.body.taskCategory;
//     const taskCompletionStatus = False;
//     const taskDateTime = req.body.taskDateTime;
//     const taskDescription = req.body.taskDescription;

router.post('/edit-task', tasksController.postEditTask);

router.post('/delete-task', tasksController.postDeleteTask);


module.exports = router;