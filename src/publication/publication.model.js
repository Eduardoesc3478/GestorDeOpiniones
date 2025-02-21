import { Schema, model } from 'mongoose';

const publicationSchema = Schema({
    title:{
        type: String,
        required: [true, "Title is required"],
        maxLength: [25, "Title cannot exceed 25 characters"],
    },
    text:{
        type: String,
        required: [true, "Text is required"],
        maxLength: [100, "Text cannot exceed 100 characters"],
    },
    category:{
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    status:{
        type: Boolean,
        default: true
    }
    

});

export default model("Publication", publicationSchema);