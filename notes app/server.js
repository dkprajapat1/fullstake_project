const express = require('express')
const mongoose = require('mongoose');
const sch = require('./models/dataschema');
const { name } = require('ejs');
const app = express();
const port = 5000;

mongoose.connect('mongodb://127.0.0.1:27017/notes'); 

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.static("img"));

app.use(express.json());
let d ="Db data";
let arr= "arr";
let logo ="NoteBook"
app.get('/' , (req , res)=>{
    res.render('index' ,{logo ,d,arr})
})


app.post('/submit' , (req , res)=>{
    res.send("hello")
    console.log(req.body.data)
    let  a= sch.create({
        title : req.body.title,
        date : req.body.date,
      data : req.body.data
    })

})
 
app.get('/find' , async (req ,res)=>{
    console.log("delet button working") 
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





app.listen(port , ()=>{
    console.log("server started and your port is:-" + port);
})