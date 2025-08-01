const express = require('express');
const router = express.Router();
const argon2 = require('argon2');

const connectToDB = require('../lib/mongo');
const generateToken = require('../utils/token');


router.post('/login', (req,res) => {
    const body = req.body
    const se =async ()=>{

        const db = await connectToDB(); // get the db instance
        const result = await db.collection('users').findOne({username:body.username});  // insert document
        // username and password combination not found
        if(result===null){
            console.log('failed Login')
            res.status(401).json({'message':'username or password is incorrect'})
        }
        const validPassword = await argon2.verify(result.password,body.password);
        if(!validPassword){
            console.log('failed password')
            res.status(401).json({'message':'username or password is incorrect'})
        }
        else{
            console.log('Login Sucesfull')
            let token = await generateToken(body.client, body.username)
            res.status(200).json({'token': token})
        }
    }
    se()

})
router.post('/token', async(req,res) => {
    const token = req.body.token
    const db = await connectToDB();
    try{
        const result = await db.collection('sessions').findOne({token:token}) 
        // unauthorized
        if(result===null){
           return res.status(401).json({valid:false,message:'Invalid or expired token'})
        }
        // authorized
        else{
            return res.status(200).json({valid:true,message:'Valid token'})
        }
    } catch(error){
        return res.status(500).json({valid:false,message:'Server error during validation'})
    }
})

router.post('/signup', async(req,res) => {
    const body = req.body
    const db = await  connectToDB();

        try{
            const check = await db.collection('users').findOne({username:body.username})
            if(check===null){
            const hashedPassword = await argon2.hash(body.password)
            const result = await db.collection('users').insertOne({username:body.username,password:hashedPassword}) 
            res.status(200).json({message:'Account created'})
        }
        else{
            res.status(409).json({message:'Username is alreday taken'})
        }
    } catch(error){
        return res.status(500).json({valid:false,message:'Server error during account creation'})
    }
})

module.exports = router;