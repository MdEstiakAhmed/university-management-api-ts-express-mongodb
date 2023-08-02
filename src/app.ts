import cors from 'cors'
import express, { Application, Request, Response } from 'express'
const app: Application = express()

import globalErrorHandler from './app/middlewares/globalErrorHandler'
import { UserRoutes } from './app/modules/user/user.route'

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/api/v1/users', UserRoutes)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.use(globalErrorHandler)

export default app
