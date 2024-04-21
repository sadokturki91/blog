import { userModel } from "../../../database/models/user.model.js";
import bcrypt from 'bcrypt'
const signUp = async(req,res)=>{
    const {name,email, pwd}= req.body
    const user= await userModel.findOne({email});
    if(user){
        return res.json({message:"user already exists"})
    } else {
        const hash= bcrypt.hashSync(pwd, 10)
        await userModel.insertMany({name, email,pwd:hash});
        res.json({messsage:"success"})
    }
};

const signIn= async(req,res)=>{
    const {email, pwd}= req.body
    const user= await userModel.findOne({email});
    if(user && bcrypt.compareSync(pwd,user.pwd)){
        res.json({message:"login with token"});
    } else{
        res.json({message:"user not found or password in correct"})
    }
}
export {signIn,signUp}

