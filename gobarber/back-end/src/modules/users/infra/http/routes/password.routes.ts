import { Router } from 'express';

import ForgotPasswordController from '../controllers/ForgotPasswordController';
import ResetPasswordController from '../controllers/ResetPasswordController';

const forgotPasswordRouter = Router();
const forgotPasswordController = new ForgotPasswordController();
const resetPasswordController = new ResetPasswordController();

forgotPasswordRouter.post('/forgot', forgotPasswordController.create);
forgotPasswordRouter.post('/reset', resetPasswordController.create);

export default forgotPasswordRouter;
