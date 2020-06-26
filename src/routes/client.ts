import express from 'express';
import { welcome, postClient, getClients, putClient } from '../controllers/client'
const router = express.Router();

router.get('/', getClients);

router.post('/', postClient);

router.put('/:id', putClient);

router.get('/welcome', welcome);

export default router