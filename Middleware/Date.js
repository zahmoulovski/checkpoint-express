// const date = (req,res,next)=>{
//     let date = new Date()
//     let h = date.getHours()
//     if (!(h>=9 && h<=17)){
//         res.send('arja3 ghodwa')
//     }
//     next()
// }

// const days = (req,res,next)=>{
//     let days = new Date()
//     let d = days.getDay()
//     if (!(d>=5 && d<=6)){
//         res.send('arja3 jem3a jeya')
//     }
//     next()
// }

const express = require('express')
const app = express()
app.use(express.static('html'));

const date=(req, res, next)=>{
    let date = new Date()
    if((date.getHours()>=9) && (date.getHours()<=17) && (date.getDay() >=1) && (date.getDay() <=5)){
        res.sendFile(__dirname+'/nav.html')
}
    next();
}

module.exports=date