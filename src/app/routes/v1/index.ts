import express from 'express'
import { AcademicSemesterRoutes } from '../../modules/academicSemester/academicSemester.route'
import { UserRoute } from '../../modules/user/user.route'

const router = express.Router()

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoute,
  },
  {
    path: '/academic-semesters',
    route: AcademicSemesterRoutes,
  },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))
export default router
