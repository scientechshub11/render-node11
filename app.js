const express = require('express');
const app =express();
require('dotenv').config();
const port = process.env.port || 3900

app.get('/', (req, res)=>{
    res.json({
        status:200,
        message:"code deployed"
    })
})

app.listen(port, ()=>{
    console.log(`app listen to the port ${port}`)
})