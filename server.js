const express = require('express')
const nunjucks = require('nunjucks')
const session = require('express-session')
const Memorystore = require('memorystore')(session)

const app = express()
const router = require('./routes')

app.set('view engine','html')
nunjucks.configure('views',{
    express:app,
})

const maxAge = 1*60*60*1000
let sessionObj = {
    secret: "web7722", //salt 
    resave : false,
    saveuninitialized: true,
    store: new Memorystore({ checkPeriod: maxAge}), // 5*60*1000
    cookie:{
        maxAge:maxAge
    }
}

app.use(session(sessionObj)) // next session
app.use(express.urlencoded({extended:true,}))

app.use(router)



app.listen(3000,()=>{
    console.log(`서버시작`)
})