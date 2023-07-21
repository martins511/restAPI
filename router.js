
const express = require('express');

const app = express();

const dbs = require('./models');

app.use(express.json())

const some = async(req,res)=>{
    
       let info ={
         name: req.body.name,
         email: req.body.email,
         password: req.body.password
       }
        const result = await dbs.User.create(info)
        if(result){
        res.status(200).json({message:result})
        }else{
          res.status(400).json({message:"Something went wrong"})
        }
}

      module.exports = some