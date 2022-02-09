const express = require('express')
const router = express.Router()

router.get('/list',(req,res)=>{
    let { user } = req.session
    if (user != undefined) {
        // 로그인한사람
        res.render('board/list')
    } else {
        // 로그인 안한사람
        res.send(alertmove('/','회원만 이용 가능 합니다!'))
    }
})

router.get('/write',(req,res)=>{
    let { user } = req.session
    if (user != undefined) {
        // 로그인한사람
        res.render('board/write')
    } else {
        // 로그인 안한사람
        res.send(alertmove('/','회원만 이용 가능 합니다!'))
    }
})

router.post('/write',(req,res)=>{
    res.send(alertmove('/board/view','글작성이 완료되었습니다.'))
})

router.get('/view',(req,res)=>{
    res.render('board/view')
})

router.get('/update',(req,res)=>{
    res.render('board/view')
})

router.post('/update',(req,res)=>{
    res.send(alertmove('/board/view','글수정이 완료되었습니다.'))
})

router.get('/delete',(req,res)=>{
    res.send(alertmove('/board/list','글삭제가 완료되었습니다.'))
})

module.exports = router