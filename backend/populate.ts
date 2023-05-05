const connectDB = require('./db/connect')
const Games = require('./models/GamesModel')

const jsonProducts = require('./games.json')

const start = async () => {

  try {
    await connectDB(`${process.env.MONGO_URI}`)
    await Games.deleteMany()
    await Games.create(jsonProducts)
    console.log('Success!!!!')
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()
