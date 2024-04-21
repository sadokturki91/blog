import mongoose from "mongoose";
//mongoose.connect('mongodb+srv://sadok1991:Cxt8zXoSoOr8Bnyn@cluster0.8esnn8b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
export function dbConnection(){mongoose.connect("mongodb://127.0.0.1:27017/blog")
.then(()=>{console.log("hallo my friend")})
.catch((err)=>{console.log("error my friend")})}
