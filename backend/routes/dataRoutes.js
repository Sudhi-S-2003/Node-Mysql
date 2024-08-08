import { Router } from 'express';
import dataController from '../controllers/dataController.js';

const router = Router();

router.get('/data', dataController.getAllData);
router.post('/data', dataController.insertData);

export default router;
