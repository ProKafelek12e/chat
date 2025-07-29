const express = require('express');
const cors = require('cors');
const loginRoutes = require('./routes/login')

const app = express()
app.use(cors())

app.use(express.json());

app.use('/api', loginRoutes);

const port = 7000

app.get('/', (req,res) => {
    res.status(200).send('Healthy')
    
})



app.listen(port, () => { console.log(`Server listen on: ${port}`) })