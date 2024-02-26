import express from 'express';
import dotenv from 'dotenv';
import router from './src/routers/index.router.js'; //me traigo las rutas configuradas

dotenv.config();
const {HTTP_PORT} = process.env;

const api = express();
api.use(router) // le dice a express que use las rutas

api.listen(HTTP_PORT, () => {
    console.log(`Server running on http://localhost:${HTTP_PORT}`);
})