import config from '../../../config'
import { IUser } from './user.interface'
import { User } from './user.model'
import { generateUserId } from './user.utils'

const createUser = async (user: IUser): Promise<IUser | null> => {
  const id = await generateUserId()
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

export default {
  createUser,
}
