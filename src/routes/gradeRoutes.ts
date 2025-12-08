import { Router } from 'express';
import { GradeController } from '../controllers/GradeController.js';

const router = Router();
const controller = new GradeController();

router.post('/grades/average', (req, res) => controller.average(req, res));
router.post('/grades/weighted-average', (req, res) => controller.weightedAverage(req, res));
router.post('/grades/highest', (req, res) => controller.highest(req, res));
router.post('/grades/lowest', (req, res) => controller.lowest(req, res));

export default router;
