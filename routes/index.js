const express = require('express')
const router = express.Router()
const user = require('../models/user')
const { alertmove } = require('../util/alert')
const userRouter = require('./user')
const boardRotuer = require('./board')

router.get('/',(req,res)=>{
    console.log('여기가 메인페이지 : ',req.session)
    const {user} = req.session
    res.render('index',{
        user
    })
})
/* User */
router.use('/user',userRouter)
router.use('/board',boardRotuer)

/* Board */ 

/*
 여기서 무거운거 오지게해야지
 DOM?
*/


module.exports = router