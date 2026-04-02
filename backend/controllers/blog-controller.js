import BlogModel from "../models/blog-schema.js";

export const createBlog = async (req, res) => {
    const {title, content, category} = req.body;
    try {
        const existingBlog = await BlogModel.findOne({title});
        if(existingBlog){
            return res.status(400).json({message: "Blog  already exists", status: "error"});
        }
        const newBlog = await BlogModel.create({
            title,
            content,
            category
        });
        return res.status(201).json({
            message: "Blog created successfully",
             blog: {
                title: newBlog.title,
                content: newBlog.content,
                category: newBlog.category
            },
             status: "success"
        }); 
    } catch(error){
        console.log("Error creating blog:", error);
        return res.status(500).json({message: "Internal server error", status: "error"});
    }
}


export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await BlogModel.find();
        return res.status(200).json({
            message: "Blogs fetched successfully", 
            blogs: blogs.map((blog) => ({
                id: blog._id,
                title: blog.title,
                content: blog.content,
                category: blog.category,
                createdAt: blog.createdAt
            })),
            status: "success"});
    }  catch(error){
        console.log("Error fetching blogs:", error);
        return res.status(500).json({message: "Internal server error", status: "error"});
    }}

export const getBlogById = async (req, res) => {
    const {id} = req.params;
    try {   
        const blog = await BlogModel.findById(id);
        if(!blog){
            return res.status(404).json({message: "Blog not found", status: "error"});
        }
        return res.status(200).json({message: "Blog fetched successfully", blog, status: "success"});
    } catch(error){
        console.log("Error fetching blog:", error);
        return res.status(500).json({message: "Internal server error", status: "error"});
    }
}   



export const updateBlog = async (req, res) => {
    const {id} = req.params;
    const {title, content, category} = req.body;
    try {
        const blog = await BlogModel.findById(id);
        if(!blog){
            return res.status(404).json({message: "Blog not found", status: "error"});
        }
        blog.title = title || blog.title;
        blog.content = content || blog.content;
        blog.category = category || blog.category;
        await blog.save();
        return res.status(200).json({message: "Blog updated successfully", blog, status: "success"});
    } catch(error){
        console.log("Error updating blog:", error);
        return res.status(500).json({message: "Internal server error", status: "error"});
    }
}

