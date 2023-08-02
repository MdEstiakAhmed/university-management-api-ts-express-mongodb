import config from '../../../config'
import { IUser } from './user.interface'
import { User } from './user.model'
import { UserUtil } from './user.util'

const createUser = async (user: IUser): Promise<IUser | null> => {
  const id = await UserUtil.generateUserId()
  user.id = id

  if (!user.password) {
    user.password = config.defaultStudentPass as string
  }

  const userResponse = await User.create(user)

  if (!userResponse) {
    throw new Error('Error creating user')
  }
  return userResponse
}

export const UserService = {
  createUser,
}
