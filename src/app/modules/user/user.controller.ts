import { NextFunction, Request, Response } from 'express'
import { UserService } from './user.service'

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserService.createUser(req.body)
    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const getUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // const result = await UserService.getUser(req.params.id)
    res.status(200).json({
      success: true,
      message: 'User retrieved successfully',
      data: {},
    })
  } catch (error) {
    next(error)
  }
}

export const UserController = {
  createUser,
  getUser,
}
