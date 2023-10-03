const mongoose = require('mongoose')

const connectToDb = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => console.log('Database connected successfully'))
    .catch(error =>
      console.log('There was an error connecting to the database: ', error)
    )
}

module.exports = connectToDb
