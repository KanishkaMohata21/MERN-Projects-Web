const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title : {
        type: String
    },
    description : {
        type : String
    },
    date : {
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model("Blog",schema)