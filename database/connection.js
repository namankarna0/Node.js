const mongoose = require("mongoose")

async function dbConnection(){
   await mongoose.connect("mongodb+srv://nodejsworkshop:namankarnanode@cluster0.hqwaijk.mongodb.net/?appName=Cluster0")
   console.log("DB connected succesfully!!!")
}

module.exports = dbConnection
