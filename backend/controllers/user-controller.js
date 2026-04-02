import UserModel from "../models/user-model.js";

export const registerUser = async (req, res) => {
    try {
        const {firstName, lastName, email, password} = req.body;
        
        // Check if the user already exists
        const existingUser = await UserModel.findOne({email});
        if(existingUser){
            return res.status(400).json({message: "User already exists"});
        }

        // Create a new user
        const newUser = new UserModel({
            firstName,
            lastName,
            email,
            password
        });

        await newUser.save();

        return res.status(201).json({message: "User registered successfully", users: newUser, status: "success" });   
    } catch(error){
        console.log("Error registering user:", error);
        return res.status(500).json({message: "Internal server error", status: "error"});
    }
}


export const loginUser  = async (req, res) => { 
    const {email, password} = req.body;
    
    try {
        const user = await UserModel.findOne({email});
        if(!user){
            return res.status(401).json({message: "Invalid Email", status: "error"});
        }
        if(user.password !== password){
            return res.status(401).json({message: "Invalid Password", status: "error"});
        }
        return res.status(200).json({message: "Login successful", users: user, status: "success"});
    }   catch(error){   
        console.log("Error logging in user:", error);
        return res.status(500).json({message: "Internal server error", status: "error"});
    }
}


export const getAllUsers = async (req, res) =>{
    try{
        const users = await UserModel.find().select("-password");
        return res.status(200).json({
            message: "user fetched successfully",
            users: users.map((user) => ({
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                date: user.createdAt,
            })),
            status: "success"
            
        })

    }catch(error){
        console.log("Error fetching users:", error);
        return res.status(500).json({message: "Internal server error", status: "error"});
    }   

}


export const getUserbyId = async (req, res) => {
    const {id} = req.params;
    try{
        const user = await UserModel.findById(id).select("-password");
        if(!user){
            return res.status(404).json({message: "User not found", status: "error"});
        }
        return res.status(200).json({
            message: "User fetched successfully",
            users: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                date: user.createdAt,
            },
            status: "success"
        });     
    }
   catch(error){
        console.log("Error fetching user by ID:", error);
        return res.status(500).json({message: "Internal server error", status: "error"});
    }   }
