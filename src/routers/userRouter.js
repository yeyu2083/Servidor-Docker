import express from 'express';

const router = express.Router(); //viene de express

//crear las entradas
router.post('/create', (req, res) => {
    res.send('user create')
})

export default router