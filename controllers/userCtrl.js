const asyncHandler=require('express-async-handler')

const loadIndex=asyncHandler(async(req,res)=>{
    res.render('index')
})

module.exports={
    loadIndex
}