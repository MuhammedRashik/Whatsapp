const express= require('express');
const app=express();
const dotenv=require('dotenv').config()
const PORT=process.env.PORT || 999;

const {dbConnect}=require('./dbConnect/dbConnect')
 dbConnect()

app.get('/',(req,res)=>{
    res.send('hello testing')
})




app.use((err, req, res, next) => {
    console.error('Error Happened:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  });

app.listen(PORT,()=>console.log(`server is runnig at prost ${PORT}`))