const { MongoClient } = require('mongodb')

const uri = 'mongodb://root:root@localhost:27017/chat_db?authSource=admin';
const client = new MongoClient(uri)

let db;

const connectToDB = async () => {
    try{
    if(!db){
        await client.connect()
        db = client.db('chat_db')
        console.log('✅ MongoDB connected');
    }
    return db;
    } catch(error){
        console.log('❌ MongoDB connection failed')
    }
}

module.exports = connectToDB;