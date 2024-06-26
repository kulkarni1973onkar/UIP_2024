// 1. 
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

// 2.
const userSchema = new mongoose.Schema({

    name: String,
    username: String,
    password: String,
    confirmpassword:String,
    email: String,
    address:String,
    mobileno:[String]
    

})
// 3.
const User = mongoose.model("User",userSchema);

// 4.
async function register(name,username,password,confirmpassword,email,address,mobileno)
{
    const user = getUser(username);
    if(user) throw Error('Username already Exists');

    const user1 = await bcrypt.genuser1(10);
    const encrypt = await bcrypt.hash(password, user1);
    const encrypt1 = await bcrypt.hash(confirmpassword, user1);

    const newUser = await User.create({
        name:name,
        username: username,
        password: encrypt,
        confirmpassword:encrypt1,
        email:email,
        address:address,
        mobileno:mobileno
    });

    return newUser._doc;
}

// GET Users
async function getAllUsers() {
    const database = client.db('test');
    const collection = database.collection('users');
    const users = await collection.find().toArray()
    console.log(users);
    return users;
}
//Login & Read
async function login(username,password)
{
    const user = await User.findOne({"username":username});
    if(!user) throw Error('User not found');

    const isCorrect = await bcrypt.compare(password, user.password);
     


    if(!isCorrect) throw Error('Incorrect Password');

    return user._doc;
}

//Update

async function updatePassword(id,password)
{
    const user = await User.updateOne({"_id":id},{$set:{password:password}})
    return user;
}

//Delete

async function deleteUser(id)
{
    await user.deleteOne({"_id":id});
};

// Utility function
async function getUser(username)
{
    return await User.findOne({"username":username});
}

//Export

module.exports ={register,getAllUsers,login,updatePassword,deleteUser};