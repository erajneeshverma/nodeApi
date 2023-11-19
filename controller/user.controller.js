import { User } from "../models/user.model.js";

const getAllUser = async (req,res)=>{

    const users = await User.find();

    //console.log(req.query);
    //const keyword = req.query.keyword;
    //console.log(keyword);
    res.json({
        success: true,
        users,
    })
}

const registerUser = async (req,res) => {
    const {name,email,password} = req.body;
    await User.create({
        name,
        email,
        password,
    });

    res.status(201).cookie("token","lol").json({
        success:true,
        message: "Registered Successfully",
    })
}

const getUserById = async (req,res) => {

    const {id} = req.params;

    const user = await User.findById(id);

    res.json({
        success: true,
        user,
    })
}
const updateUserById = async (req,res) => {

    const {id} = req.params;

    const user = await User.findById(id);

    res.json({
        success: true,
        message: "Updated successfully ...",
    })
}
const deleteUserById = async (req,res) => {

    const {id} = req.params;

    const user = await User.findById(id);

    res.json({
        success: true,
        message: "Deleted Successfully",
    })
}

const getSpecialUser = async (req,res) => {

    // const {id} = req.params;

    // const user = await User.findById(id);

    res.json({
        success: true,
        message: "I am Special user",
    })
}

export {getAllUser, registerUser, getUserById, updateUserById, deleteUserById, getSpecialUser};