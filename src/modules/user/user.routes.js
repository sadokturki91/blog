import  express  from 'express';
import { signIn,signUp } from './user.controller.js';
const userRouter=express.Router()

  userRouter.post("/SignUp",signUp)
  userRouter.post("/SignIn",signIn)
  export default userRouter;
