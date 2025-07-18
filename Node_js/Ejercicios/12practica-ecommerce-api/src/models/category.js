import mongoose from "mongoose";


const categorySchema = new mongoose.Schema({
    name:{
        trim: true,
    },
    description:{
        type: String,
        trim: true,
        required: true,
    },
    imageUrl:{
        type: String,
        default:'https://placehold.co/800x600.png',
    },
    parentCategory:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        default: null,
    },
   
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;