const express = require ('express');
const router = express.Router();
const taskController = require('../controllers/TaskControlller');




router.get('/tasks',taskController.getTasks);
router.post('/tasks',taskController.createTasks);
router.put('/tasks/:id',taskController.updateTaks);
router.delete('/tasks/:id',taskController.deleteTask);

module.exports=router;
