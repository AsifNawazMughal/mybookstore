import CategoryModel from "../models/category-schema.js";

export const createCategory = async (req, res) => {
    const {name, description} = req.body;

    try {
         const existingCategory = await CategoryModel.findOne({name});
        if(existingCategory){
            return res.status(400).json({message: "Category already exists", status: "error"});
        }
        const newCategory = await CategoryModel.create({
            name,
            description
        });
        return res.status(201).json({
            message: "Category created successfully",
             category: {
                name: newCategory.name,
                description: newCategory.description
            },
             status: "success"
        });
    } catch(error){
        console.log("Error creating category:", error);
        return res.status(500).json({message: "Internal server error", status: "error"});
    }

}

export const getAllCategories = async (req, res) => {
    try {
        const categories = await CategoryModel.find();
        return res.status(200).json({
            message: "Categories fetched successfully", 
            categories: categories.map((category) => ({
                id: category._id,
                name: category.name,
                description: category.description,
                createdAt: category.createdAt
            })),
            status: "success"});
    } catch(error){
        console.log("Error fetching categories:", error);
        return res.status(500).json({message: "Internal server error", status: "error"});
    }
}       


export const getCategoryById = async (req, res) => {
    const {id} = req.params;
    try {
        const category = await CategoryModel.findById(id);
        if(!category){
            return res.status(404).json({message: "Category not found", status: "error"});
        }
        return res.status(200).json({message: "Category fetched successfully", category, status: "success"});
    } catch(error){
        console.log("Error fetching category:", error);
        return res.status(500).json({message: "Internal server error", status: "error"});
    }
}