import dotenv from 'dotenv'
import path from 'path'
dotenv.config({
  path: path.join(
    process.cwd(),
    process.env.NODE_ENV === 'production' ? '.env' : '.env.dev',
  ),
})

export default {
  port: process.env.PORT,
  databaseURL: process.env.DATABASE_URL,
  defaultStudentPass: process.env.DEFAULT_STUDENT_PASS,
}
