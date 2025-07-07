import express from 'express';
import {logger} from '../middleware/logger.js';
import {getUsers,addUser} from '../middleware/usersController.js';

const router = express.Router();

router.get('/users',logger,getUsers);
router.post('/users',logger,addUser);

export default router;