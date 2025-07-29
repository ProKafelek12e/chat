const crypto = require('crypto');
const connectToDB = require('../lib/mongo');
const generateToken = async(client, username) => {

    let db = await connectToDB()

    let tokenExists = undefined
    let token = ""
    while(tokenExists!==null){
        
        token = crypto.randomBytes(32).toString('hex');
        tokenExists = await db.collection('sessions').findOne({token:token})
    }
    const isSession = await db.collection('sessions').findOne({client:client,username:username})
    
    // there is someone logged in
    if(isSession!==null)
        await db.collection('sessions').updateOne({client:client,username:username},{$set:{token:token,client:client,username:username}})
    // new session
    else 
        await db.collection('sessions').insertOne({token:token,client:client,username:username})

    return token;
}


module.exports = generateToken;