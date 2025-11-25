const express = require('express')  
const mongoose = require('mongoose');
const {sch,ass} = require('./models/dataschema');  // import sch form schema
const { name } = require('ejs');   //import ejs
const app = express(); 
const port = 5000;

const assignment = require('./routes/assignment_server'); // import router

mongoose.connect('mongodb://127.0.0.1:27017/notes');  //connetct database

app.set('view engine', 'ejs');
app.use('/assignment' , assignment);  // use router
app.use(express.static("public"));
app.use(express.static("img"));
app.use(express.static("src"));
app.use(express.json());   // to handle data from frontend req.body


let d ="Db data";
let arr= "arr";
let logo ="NoteBook"
app.get('/' , (req , res)=>{
    res.render('index' ,{logo ,d,arr})
})


app.post('/submit' , (req , res)=>{
    let  a= sch.create({
        title : req.body.title,
        date : req.body.date,
      data : req.body.data
    })

})
 
app.get('/find' , async (req ,res)=>{
     d = await sch.find({} , {data:1,title:1,date:1 , _id:1}); 
    res.json(d)
})

app.get('/delet' , async(req , res)=>{
    let k = await sch.deleteMany({});
})

app.post("/delete/:id", async (req, res) => {
    const id = req.params.id;
     let k = await sch.deleteOne({_id:id});
});

// render attendance page
app.get('/attendance' , (req , res)=>{
    res.render('attendance')
})


app.listen(port , ()=>{
    console.log("server started and your port is:-  http://localhost:" + port);
})