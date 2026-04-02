import mongoose from "mongoose";
const {Schema, model} = mongoose;

const blogSchema = new Schema({
    title:{ 
        type: String,
        required: true,
        unique: true
    },
    content:{
        type: String,
        required: true
    },
    category:{
        type: Schema.Types.ObjectId,
        ref: "categories",
        required: true
    }, 
    createdAt:{
        type: Date,
        default: Date.now
    },
    updatedAt:{
        type: Date,
        default: Date.now
    }
});

const BlogModel = model("blogs", blogSchema);

export default BlogModel;