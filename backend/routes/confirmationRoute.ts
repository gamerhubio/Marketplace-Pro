import express from 'express';
import { confirmEmail } from '../controllers/ConfirmationController';

const router = express.Router();

// confirmation routes
router.route('/email/:id').get(confirmEmail)

export default router;
