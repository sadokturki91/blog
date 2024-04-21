import  mongoose  from "mongoose";
const noteSchema=mongoose.Schema({
  title:String,
  desc:String,
  createBy:{
    type:mongoose.SchemaTypes.ObjectId,
    ref:'user'
  },
})
export const noteModel=mongoose.model('note',noteSchema)