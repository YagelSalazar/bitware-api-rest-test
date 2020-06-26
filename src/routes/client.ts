import express from 'express';
import {welcome, postClient, getClients} from '../controllers/client'
const router = express.Router();

router.get('/welcome', welcome );

router.post('/', postClient );

router.get('/', getClients );

export default router