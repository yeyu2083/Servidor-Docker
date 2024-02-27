import express from 'express';
import createUser from '../controllers/user/create.controller.js';

const router = express.Router(); //viene de express

//crear las entradas
router.post('/create', createUser);

export default router