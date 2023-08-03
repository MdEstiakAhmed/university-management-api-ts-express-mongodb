import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { UserController } from './user.controller'
import { UserValidation } from './user.validation'
const router = express.Router()

router.post(
  '/',
  validateRequest(UserValidation.createUserZodSchema),
  UserController.createUser,
)
router.get('/:id', UserController.getUser)

export const UserRoute = router
