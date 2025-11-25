const express = require('express');
const router = express.Router();
const { sch, ass } = require('../models/dataschema');
router.use(express.json());


// router.use(express.static('home_public'));
router.get('/', (req, res) => {
    res.render('assignment', {})
})
router.post('/add_subject_data', (req, res) => {
    
    let a = ass.create({
        subject: req.body.subject,
        total: req.body.total,
        completed: req.body.completed,
        Submited: req.body.Submited
    })
})
router.get('/find_subject',async (req, res)=>{
   let a =await ass.find({},{subject:1,completed:1,total:1,Submited:1 ,_id:1});
   res.json(a);
})
router.post('/delete/:id' , async(req , res)=>{
     const id = req.params.id;
      let k = await ass.deleteOne({_id:id});
})
router.get('/deleteAll' , async(req , res)=>{
      let k = await ass.deleteMany();
})



module.exports = router;
