import   {noteModel} from "../../../database/models/note.model.js";
const addNote=async(req,res)=>{
const {title,desc,createBy}=req.body
const newNote=await noteModel.insertMany({title,desc,createBy})
res.json({message:"success"})
}
export {addNote}
