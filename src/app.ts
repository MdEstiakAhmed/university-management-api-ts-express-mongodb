import express, { Application, Request, Response } from 'express'
import cors from 'cors'
const app: Application = express()

import { UserRoutes } from './app/modules/user/user.route'

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/api/v1/users', UserRoutes)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app
