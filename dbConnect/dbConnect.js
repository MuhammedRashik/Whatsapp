const asyncHandler=require('express-async-handler')
const mongoose=require('mongoose')



const dbConnect= asyncHandler(async(req,res)=>{

    await mongoose.connect(process.env.MONGO_URL,{

            useNewUrlParser: true,
            useUnifiedTopology: true,
            ssl: true,
            tlsAllowInvalidCertificates: true,
    })

    console.log('atlas is connected !');
})


module.exports={dbConnect}