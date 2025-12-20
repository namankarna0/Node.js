const express = require("express")
const dbConnection = require("./database/connection")
const Blog = require("./models/blogModel")
const User = require("./models/userModel")
const app = express()
const bcrypt = require("bcrypt")

dbConnection()
app.use(express.json())



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

app.get("/fetch-users", async function(req,res){
    // response ma user table ma vako user data sent garnu paryo
   const data = await User.find()
   res.json({
    data : data
   })
})

//Fetch data from blog table
app.get("/blog/fetch", async function(req,res){
    const data = await Blog.find()
    res.json({
        data : data
    })
})

app.post("/register",async function(req,res){
    const name = req.body.name
    const email =  req.body.email
    const password = req.body.password
    //alternative : const{name,email,password} = req.body
    await User.create({
        name : name,
        email : email,
        password : bcrypt.hashSync(password,10)
    })
    res.json({
        message : "User registered successfully!!!"
    })
})
app.delete("/delete/:id",async function(req,res){
    const id = req.params.id
    await User.findByIdAndDelete(id)
    res.json({
        message : "User with that id deleted successfully!!!"
    })
})

app.delete("/delete/",async function(req,res){
    const id= req.body.id
    await User.findByIdAndDelete(id)
    res.json({
        message : "User with that request id successfully!!!"
    })
})

app.post("/blog/create",async function(req,res){
    const title = req.body.title
    const subtitle =  req.body.subtitle
    const description = req.body.description
    await Blog.create({
        title : title,
        subtitle : subtitle,
        description : description
    })
    res.json({
        message : "Blog registered successfully!!!"
    })
})
app.delete("/blog/delete/:id",async function(req,res){
    const id = req.params.id
    await Blog.findByIdAndDelete(id)
    res.json({
        message : "Blog with that id deleted successfully!!!"
    })
})
app.listen(3000,function(){
    console.log("server has started at port 3000")
})
