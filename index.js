const express= require('express');
const app=express();
const dotenv=require('dotenv').config()
const PORT=process.env.PORT || 999;
const morgan=require('morgan');
const bodyParser=require('body-parser')
const path =require('path')
const cookieParser=require('cookie-parser')
const {dbConnect}=require('./dbConnect/dbConnect')
 dbConnect()
const userRouter=require('./routes/userRoter')
app.use('/',userRouter)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname,'public')));
app.use(morgan("dev"))


app.use((err, req, res, next) => {
    console.error('Error Happened:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  });

app.listen(PORT,()=>console.log(`server is runnig at prost ${PORT}`))