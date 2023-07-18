import app from './app'
import config from './config'

const main = async () => {
  try {
    // await mongoose.connect(config.databaseURL as string);
    console.log('Connected to MongoDB')
    app.listen(config.port, () => {
      console.log(`Example app listening at http://localhost:${config.port}`)
    })
  } catch (error) {
    console.error(error)
  }
}

main()
