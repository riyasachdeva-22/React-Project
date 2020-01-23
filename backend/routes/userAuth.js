const express = require('express')
const {signup}=require('../controllers/userAuth')
// const {userById}=require('../controllers/userAuth')
const {userSignupValidator}=require('../validator')

const router=express.Router()

router.post('/signup',userSignupValidator,signup);
// router.post('/signin',signin);
// router.get('/signout',signout);

// router.param("userId",userById)

module.exports=router