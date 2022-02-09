const express = require('express')
const router = express.Router()

router.get('/login',(req,res)=>{
    res.render('user/login')
})

router.post('/login',(req,res)=>{
    let {userid,userpw} = req.body
    console.log(userid,userpw,user)
    let [item] = user.filter(v=> (v.userid==userid && v.userpw == userpw) )
    console.log(item)
    if (item != undefined) {
        // 로그인을 할수있는 경우
        req.session.user = { ...item  }  
        res.redirect('/')
    } else {
        // 로그인을 못하는 경우
        res.send(alertmove('/user/login','아이디와 패스워드를 확인해주세요.'))
    }
})

router.get('/profile',(req,res)=>{
    res.render('user/profile')
})

router.get('/logout',(req,res)=>{
    req.session.destroy(()=>{
        req.session
    })

    res.send(alertmove('/','로그아웃이 완료되었습니다.'))
})

module.exports = router