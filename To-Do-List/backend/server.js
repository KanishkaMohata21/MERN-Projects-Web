const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')
const router = require('./router')


const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("Mongodb connected...."))
.catch((e)=>console.log(e))

app.use("/api",router)

app.listen(PORT,()=>console.log(`Listening on Port ${PORT}`))
