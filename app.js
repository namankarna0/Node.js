const express = require("express")
const app = express()



app.get("/",function(req,res){
    res.json({
        name: "homepage"
    })
})
app.get("/about",function(req,res){
    res.json({
        adress :"Brt",
        age :19,
        name : "naman"
    })
})


app.listen(3000,function(){
    console.log("server has started at port 3000")
})
