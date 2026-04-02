import mongoose from "mongoose";

const {Schema, model} = mongoose;

const categorySchema = new Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    description:{
        type: String,
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

const CategoryModel = model("categories", categorySchema);

export default CategoryModel;