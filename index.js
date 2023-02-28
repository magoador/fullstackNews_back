const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(express.json())
app.use(cors())
app.use(require('./routes/news.routes'))
app.use(require('./routes/user.routes'))
app.use(require('./routes/category.routes'))
app.use(morgan('dev'))
app.use(express.static(__dirname + '/assets'));


const { PORT, MONGO_SERVER } = process.env

const connectAndStartServer = async () => {
    try {
        await mongoose.connect(MONGO_SERVER)
        app.listen(PORT, () => {
            console.log(`Server started: http://localhost:${PORT}/news`);
        })
    } catch (err) {
        console.log(`Error: ${err}`)
    }
}

connectAndStartServer()