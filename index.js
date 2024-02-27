import express from 'express';
import dotenv from 'dotenv';
import router from './src/routers/index.router.js'; //me traigo las rutas configuradas
import erroController from './src/controllers/error/index.controller.js';

dotenv.config();
const {HTTP_PORT} = process.env;

const api = express();
api.use(express.json()) //le dice a express que use json
api.use(router) // le dice a express que use las rutas
api.use(erroController) // le dice a express que use el controlador


api.listen(HTTP_PORT, () => {
    console.log(`Server running on http://localhost:${HTTP_PORT}`);
})