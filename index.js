import  express  from "express";
const app = express()
const port = 3001
import { dbConnection } from "./database/dbConnection.js";
import userRouter from "./src/modules/user/user.routes.js";
import noteRouter from "./src/modules/note/note.routes.js";
dbConnection()
app.use(express.json())
app.use("/",userRouter)
app.use("/",noteRouter)






app.listen(port,()=>{console.log("welecom")})


