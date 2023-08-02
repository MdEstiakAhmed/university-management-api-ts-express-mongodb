import { User } from './user.model'

const findLastUserId = async (): Promise<string | undefined> => {
  const lastStudent = await User.findOne(
    {
      role: 'student',
    },
    { id: 1, _id: 0 },
  )
    .sort({
      createdAt: -1,
    })
    .lean()

  return lastStudent?.id ? lastStudent.id.substring(4) : undefined
}

const generateUserId = async (): Promise<string> => {
  const currentId = (await findLastUserId()) || (0).toString().padStart(5, '0') //00000
  //increment by 1
  const incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0')

  return incrementedId
}

export const UserUtil = {
  generateUserId,
}
