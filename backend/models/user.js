const mongoose=require('mongoose');
const uuidv1 = require("uuid/v1");
const crypto = require('crypto');
const userSch=new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        trim:true,
        required:true
    },
    phone:{
        type:String,
        trim:true,
        required:true
    },
    hashed_password:{
        type:String,
        trim:true,
        required:true
    },
    salt:String,
    created:{
        type:Date,
        default:Date.now
    },
    updated:Date
})
//virtual fiedls
userSch.virtual('password')
.set(function(password){
    //create temporary variable called _password
    this._password = password
    //generate a timestamp with package uuid.timestamp=time you create account
    this.salt = uuidv1()
    //encryptPassword()
    this.hashed_password = this.encryptPassword(password)
})
.get(function(){
    return this._password;
});

userSch.methods ={
    encryptPassword:function(password){
        if(!password)
            return "";
        try{
            return crypto.createHmac("sha1",this.salt)
            .update(password)
            .digest('hex');
        }   
        catch(err){
            return ""
        } 
    }
}
module.exports=mongoose.model("User",userSch);