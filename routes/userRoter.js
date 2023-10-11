const express=require('express')
const router=express()

const {loadIndex}=require('../controllers/userCtrl')



router.set('view engine', 'ejs');
router.set('views', './views/user');




router.get('/',loadIndex)

module.exports=router