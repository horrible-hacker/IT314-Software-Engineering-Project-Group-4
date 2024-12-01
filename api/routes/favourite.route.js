import express from 'express';
import {deleteFav, getFav,createFav,isFav} from '../controllers/favourite.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();
router.post('/create',verifyToken, createFav);
router.delete('/delete/:id',verifyToken, deleteFav);
router.get('/get/:id',verifyToken, getFav);
router.get('/check/:id',verifyToken,isFav);

export default router;