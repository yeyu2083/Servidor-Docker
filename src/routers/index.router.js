import  express from 'express';
import userRouter from './userRouter.js';


const router = express.Router();

router.use('/api/user',userRouter); //configuro la ruta

export default router
  