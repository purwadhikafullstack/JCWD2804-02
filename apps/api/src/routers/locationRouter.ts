import { Router } from 'express';
import { setLocation } from '@/controllers/locationController.ts';

const router = Router();

router.post('/set-location', setLocation);

export default router;
