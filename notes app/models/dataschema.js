const mongoose = require('mongoose')

const data = mongoose.Schema({
        title : String,
        date : String,
        data : String
});

const sch = mongoose.model('sch' , data);
module.exports = sch;