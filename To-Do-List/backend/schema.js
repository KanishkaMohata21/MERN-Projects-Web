const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Task", schema)