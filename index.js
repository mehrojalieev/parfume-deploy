const express = require('express')
require('dotenv').config()

const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

const mongoose = require('mongoose')

const PORT = process.env.PORT || 4545


mongoose.connect(process.env.MONGODB_CONNECT_URL,  {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
)


const db = mongoose.connection

db.on('error', (error) => console.error(error)  )
db.once('open', () => console.log('Connected to Database'))

const parfumeRoutes = require('./routes/parfumes')
const userRoutes = require("./routes/users")

app.use('/', parfumeRoutes)
app.use('/user', userRoutes)


app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))