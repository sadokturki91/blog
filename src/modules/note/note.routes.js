import  express  from 'express';
import { addNote } from "./note.controller.js";
const noteRouter=express.Router()

  noteRouter.post("/",addNote)


  export default noteRouter;