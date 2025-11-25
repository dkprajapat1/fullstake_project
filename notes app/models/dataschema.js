const mongoose = require('mongoose')  //import mongoose

const data = mongoose.Schema({  //creating schema
        title : String,
        date : String,
        data : String
});

const data1 = mongoose.Schema({
        subject : String,
        total: Number,
        completed: Number,
        Submited: Number
})

const sch = mongoose.model('sch' , data); //store model into sch


const ass = mongoose.model('ass' , data1);
module.exports = {sch,ass};